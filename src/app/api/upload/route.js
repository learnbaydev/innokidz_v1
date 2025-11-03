import {
  writeFile,
  mkdir,
  readFile,
  writeFile as fsWriteFile,
} from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const text = formData.get("text");
    const image = formData.get("image");

    if (!text || !image) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Generate userId by counting previous uploads (simple demo version)
    const counterFile = path.join(uploadDir, "counter.json");
    let currentId = 0;
    try {
      const content = await readFile(counterFile, "utf-8");
      const data = JSON.parse(content);
      currentId = data.lastId || 0;
    } catch {
      currentId = 0; // if no file yet
    }
    const newUserId = currentId + 1;
    await fsWriteFile(counterFile, JSON.stringify({ lastId: newUserId }));

    // Save image
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${image.name}`;
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // Return stored info
    const data = {
      userId: newUserId,
      text,
      imageUrl: `/uploads/${fileName}`,
    };

    console.log("Saved Data:", data);

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("Upload error:", err);
    return Response.json({ error: "Failed to upload" }, { status: 500 });
  }
}
