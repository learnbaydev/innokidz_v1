// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { X, User, Phone, Mail, Heart, Monitor, CheckCircle, Star } from 'lucide-react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Label } from './ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useToast } from '@/hooks/use-toast';

// interface DemoBookingModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const formSchema = z.object({
//   childName: z.string().min(2, 'Child name must be at least 2 characters'),
//   ageOrDob: z.string().min(1, 'Please provide age or date of birth'),
//   classGrade: z.string().min(1, 'Please provide class/grade'),
//   schoolName: z.string().min(2, 'School name must be at least 2 characters'),
//   whatsappNumber: z.string().min(10, 'Please provide a valid WhatsApp number'),
//   parentEmail: z.string().email('Please provide a valid email address'),
//   interests: z.array(z.string()).optional(),
//   learningMode: z.enum(['online', 'offline', 'both']).optional(),
// });

// type FormData = z.infer<typeof formSchema>;

// const interestOptions = [
//   'Learning AI tools like ChatGPT, Canva, etc.',
//   'Creating YouTube videos or Reels',
//   'Building websites or apps',
//   'Designing logos, videos & posts',
//   'Starting a brand or product',
//   'Learning public speaking & leadership'
// ];

// export default function DemoBookingModal({ isOpen, onClose }: DemoBookingModalProps) {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const { toast } = useToast();
//   const queryClient = useQueryClient();

//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       childName: '',
//       ageOrDob: '',
//       classGrade: '',
//       schoolName: '',
//       whatsappNumber: '',
//       parentEmail: '',
//       interests: undefined,
//       learningMode: undefined,
//     }
//   });

//   const createBookingMutation = useMutation({
//     mutationFn: async (data: FormData) => {
//       const response = await fetch('/api/demo-booking', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (!response.ok) {
//         throw new Error('Failed to submit form');
//       }
//       return response.json();
//     },
//     onSuccess: () => {
//       setIsSubmitted(true);
//       toast({
//         title: "Registration Successful!",
//         description: "Welcome to InnoKidz! We'll contact you soon with program details.",
//       });
//       queryClient.invalidateQueries({ queryKey: ['/api/demo-booking'] });
//     },
//     onError: (error) => {
//       toast({
//         title: "Registration Failed",
//         description: "Please try again or contact support.",
//         variant: "destructive",
//       });
//     },
//   });

//   const handleFormSubmit = (data: FormData) => {
//     createBookingMutation.mutate(data);
//   };

//   const handleClose = () => {
//     setIsSubmitted(false);
//     form.reset();
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
//       <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-gray-200 flex flex-col">
//         {/* Header */}
//         <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-6 rounded-t-2xl">
//           <button
//             onClick={handleClose}
//             className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           <div className="text-center text-white">
//             <div className="flex justify-center mb-3">
//               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
//                 <Star className="w-6 h-6 text-yellow-300" />
//               </div>
//             </div>
//             <h2 className="text-2xl font-bold mb-2">Join InnoKidz Program!</h2>
//             <p className="text-white/90 text-base">Start your child's entrepreneurship journey today</p>
//           </div>
//         </div>

//         {/* Form Content */}
//         <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-gray-50">
//           {isSubmitted ? (
//             <div className="text-center py-12 bg-white rounded-xl">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <CheckCircle className="w-12 h-12 text-green-600" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful! 🎉</h3>
//               <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
//                 Welcome to InnoKidz! We'll contact you within 24 hours with program details and next steps.
//               </p>
//               <Button onClick={handleClose} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg">
//                 Awesome!
//               </Button>
//             </div>
//           ) : (
//             <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-5">

//               {/* Section 1: Child Information */}
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <div className="flex items-center mb-6">
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                     <User className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">About Your Child</h3>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="childName" className="text-sm font-medium text-gray-900">
//                       Child's Full Name *
//                     </Label>
//                     <Input
//                       id="childName"
//                       {...form.register('childName')}
//                       placeholder="Enter child's full name"
//                       className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                     />
//                     {form.formState.errors.childName && (
//                       <p className="text-red-500 text-xs">{form.formState.errors.childName.message}</p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="ageOrDob" className="text-sm font-medium text-gray-900">
//                       Age / Date of Birth *
//                     </Label>
//                     <Input
//                       id="ageOrDob"
//                       {...form.register('ageOrDob')}
//                       placeholder="e.g., 11 years or 15/02/2014"
//                       className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                     />
//                     {form.formState.errors.ageOrDob && (
//                       <p className="text-red-500 text-xs">{form.formState.errors.ageOrDob.message}</p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="classGrade" className="text-sm font-medium text-gray-900">
//                       Class / Grade *
//                     </Label>
//                     <Input
//                       id="classGrade"
//                       {...form.register('classGrade')}
//                       placeholder="e.g., 6th Grade, Class 10"
//                       className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                     />
//                     {form.formState.errors.classGrade && (
//                       <p className="text-red-500 text-xs">{form.formState.errors.classGrade.message}</p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="schoolName" className="text-sm font-medium text-gray-900">
//                       School Name *
//                     </Label>
//                     <Input
//                       id="schoolName"
//                       {...form.register('schoolName')}
//                       placeholder="Enter school name"
//                       className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                     />
//                     {form.formState.errors.schoolName && (
//                       <p className="text-red-500 text-xs">{form.formState.errors.schoolName.message}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Section 2: Parent Contact */}
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <div className="flex items-center mb-6">
//                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
//                     <Phone className="w-5 h-5 text-green-600" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">Parent Contact</h3>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="whatsappNumber" className="text-sm font-medium text-gray-900">
//                       WhatsApp Number *
//                     </Label>
//                     <Input
//                       id="whatsappNumber"
//                       type="tel"
//                       {...form.register('whatsappNumber')}
//                       placeholder="+91 98765 43210"
//                       className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                     />
//                     {form.formState.errors.whatsappNumber && (
//                       <p className="text-red-500 text-xs">{form.formState.errors.whatsappNumber.message}</p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="parentEmail" className="text-sm font-medium text-gray-900">
//                       Email Address *
//                     </Label>
//                     <Input
//                       id="parentEmail"
//                       type="email"
//                       {...form.register('parentEmail')}
//                       placeholder="parent@email.com"
//                       className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
//                     />
//                     {form.formState.errors.parentEmail && (
//                       <p className="text-red-500 text-xs">{form.formState.errors.parentEmail.message}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Section 3: Interests */}
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <div className="flex items-center mb-6">
//                   <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
//                     <Heart className="w-5 h-5 text-pink-600" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">What excites your child most?</h3>
//                 </div>

//                 <Select onValueChange={(value) => form.setValue('interests', [value])}>
//                   <SelectTrigger className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200">
//                     <SelectValue placeholder="Choose your child's main interest" className="text-gray-900" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-xl z-[10000] max-h-60 overflow-y-auto">
//                     {interestOptions.map((interest) => (
//                       <SelectItem
//                         key={interest}
//                         value={interest}
//                         className="text-gray-900 hover:bg-purple-50 focus:bg-purple-50 cursor-pointer px-3 py-2"
//                       >
//                         {interest}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 {form.formState.errors.interests && (
//                   <p className="text-red-500 text-xs mt-2">{form.formState.errors.interests.message}</p>
//                 )}
//               </div>

//               {/* Learning Mode Section */}
//               <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
//                 <div className="flex items-center mb-6">
//                   <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
//                     <Monitor className="w-5 h-5 text-purple-600" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900">Preferred Learning Mode</h3>
//                 </div>

//                 <Select onValueChange={(value) => form.setValue('learningMode', value as 'online' | 'offline' | 'both')}>
//                   <SelectTrigger className="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200">
//                     <SelectValue placeholder="Choose learning mode" className="text-gray-900" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border border-gray-300 rounded-lg shadow-xl z-[10000] max-h-60 overflow-y-auto">
//                     <SelectItem value="online" className="text-gray-900 hover:bg-purple-50 focus:bg-purple-50 cursor-pointer px-3 py-2">
//                       Online (30-min weekday classes)
//                     </SelectItem>
//                     <SelectItem value="offline" className="text-gray-900 hover:bg-purple-50 focus:bg-purple-50 cursor-pointer px-3 py-2">
//                       Offline Weekend Workshops
//                     </SelectItem>
//                     <SelectItem value="both" className="text-gray-900 hover:bg-purple-50 focus:bg-purple-50 cursor-pointer px-3 py-2">
//                       Both (Flexible combination)
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>
//                 {form.formState.errors.learningMode && (
//                   <p className="text-red-500 text-xs mt-2">{form.formState.errors.learningMode.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <div className="pt-4">
//                 <Button
//                   type="submit"
//                   disabled={createBookingMutation.isPending}
//                   className="w-full h-14 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
//                 >
//                   {createBookingMutation.isPending ? (
//                     <div className="flex items-center justify-center">
//                       <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
//                       Joining Program...
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-center">
//                       <Star className="w-5 h-5 mr-2" />
//                       Join the Program
//                     </div>
//                   )}
//                 </Button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
