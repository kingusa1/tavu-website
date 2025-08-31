
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import React from 'react'
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { ArrowRight, Loader2 } from "lucide-react"
import { Combobox } from "../ui/combobox"

const sources = [
    { id: "instagram", label: "Instagram" },
    { id: "tiktok", label: "TikTok" },
    { id: "friend", label: "Friend / Word of Mouth" },
    { id: "search", label: "Google Search" },
    { id: "other", label: "Other" },
]

const countryCodes = [
    { "value": "+971", "label": "🇦🇪 United Arab Emirates" },
    { "value": "+93", "label": "🇦🇫 Afghanistan" },
    { "value": "+355", "label": "🇦🇱 Albania" },
    { "value": "+213", "label": "🇩🇿 Algeria" },
    { "value": "+1-684", "label": "🇦🇸 American Samoa" },
    { "value": "+376", "label": "🇦🇩 Andorra" },
    { "value": "+244", "label": "🇦🇴 Angola" },
    { "value": "+1-264", "label": "🇦🇮 Anguilla" },
    { "value": "+672", "label": "🇦🇶 Antarctica" },
    { "value": "+1-268", "label": "🇦🇬 Antigua and Barbuda" },
    { "value": "+54", "label": "🇦🇷 Argentina" },
    { "value": "+374", "label": "🇦🇲 Armenia" },
    { "value": "+297", "label": "🇦🇼 Aruba" },
    { "value": "+61", "label": "🇦🇺 Australia" },
    { "value": "+43", "label": "🇦🇹 Austria" },
    { "value": "+994", "label": "🇦🇿 Azerbaijan" },
    { "value": "+1-242", "label": "🇧🇸 Bahamas" },
    { "value": "+973", "label": "🇧🇭 Bahrain" },
    { "value": "+880", "label": "🇧🇩 Bangladesh" },
    { "value": "+1-246", "label": "🇧🇧 Barbados" },
    { "value": "+375", "label": "🇧🇾 Belarus" },
    { "value": "+32", "label": "🇧🇪 Belgium" },
    { "value": "+501", "label": "🇧🇿 Belize" },
    { "value": "+229", "label": "🇧🇯 Benin" },
    { "value": "+1-441", "label": "🇧🇲 Bermuda" },
    { "value": "+975", "label": "🇧🇹 Bhutan" },
    { "value": "+591", "label": "🇧🇴 Bolivia" },
    { "value": "+387", "label": "🇧🇦 Bosnia and Herzegovina" },
    { "value": "+267", "label": "🇧🇼 Botswana" },
    { "value": "+55", "label": "🇧🇷 Brazil" },
    { "value": "+246", "label": "🇮🇴 British Indian Ocean Territory" },
    { "value": "+1-284", "label": "🇻🇬 British Virgin Islands" },
    { "value": "+673", "label": "🇧🇳 Brunei" },
    { "value": "+359", "label": "🇧🇬 Bulgaria" },
    { "value": "+226", "label": "🇧🇫 Burkina Faso" },
    { "value": "+257", "label": "🇧🇮 Burundi" },
    { "value": "+855", "label": "🇰🇭 Cambodia" },
    { "value": "+237", "label": "🇨🇲 Cameroon" },
    { "value": "+1", "label": "🇨🇦 Canada" },
    { "value": "+238", "label": "🇨🇻 Cape Verde" },
    { "value": "+1-345", "label": "🇰🇾 Cayman Islands" },
    { "value": "+236", "label": "🇨🇫 Central African Republic" },
    { "value": "+235", "label": "🇹🇩 Chad" },
    { "value": "+56", "label": "🇨🇱 Chile" },
    { "value": "+86", "label": "🇨🇳 China" },
    { "value": "+61-8", "label": "🇨🇽 Christmas Island" },
    { "value": "+61-8", "label": "🇨🇨 Cocos Islands" },
    { "value": "+57", "label": "🇨🇴 Colombia" },
    { "value": "+269", "label": "🇰🇲 Comoros" },
    { "value": "+682", "label": "🇨🇰 Cook Islands" },
    { "value": "+506", "label": "🇨🇷 Costa Rica" },
    { "value": "+385", "label": "🇭🇷 Croatia" },
    { "value": "+53", "label": "🇨🇺 Cuba" },
    { "value": "+599", "label": "🇨🇼 Curacao" },
    { "value": "+357", "label": "🇨🇾 Cyprus" },
    { "value": "+420", "label": "🇨🇿 Czech Republic" },
    { "value": "+243", "label": "🇨🇩 Democratic Republic of the Congo" },
    { "value": "+45", "label": "🇩🇰 Denmark" },
    { "value": "+253", "label": "🇩🇯 Djibouti" },
    { "value": "+1-767", "label": "🇩🇲 Dominica" },
    { "value": "+1-809", "label": "🇩🇴 Dominican Republic" },
    { "value": "+1-829", "label": "🇩🇴 Dominican Republic" },
    { "value": "+1-849", "label": "🇩🇴 Dominican Republic" },
    { "value": "+670", "label": "🇹🇱 East Timor" },
    { "value": "+593", "label": "🇪🇨 Ecuador" },
    { "value": "+20", "label": "🇪🇬 Egypt" },
    { "value": "+503", "label": "🇸🇻 El Salvador" },
    { "value": "+240", "label": "🇬🇶 Equatorial Guinea" },
    { "value": "+291", "label": "🇪🇷 Eritrea" },
    { "value": "+372", "label": "🇪🇪 Estonia" },
    { "value": "+251", "label": "🇪🇹 Ethiopia" },
    { "value": "+500", "label": "🇫🇰 Falkland Islands" },
    { "value": "+298", "label": "🇫🇴 Faroe Islands" },
    { "value": "+679", "label": "🇫🇯 Fiji" },
    { "value": "+358", "label": "🇫🇮 Finland" },
    { "value": "+33", "label": "🇫🇷 France" },
    { "value": "+594", "label": "🇬🇫 French Guiana" },
    { "value": "+689", "label": "🇵🇫 French Polynesia" },
    { "value": "+241", "label": "🇬🇦 Gabon" },
    { "value": "+220", "label": "🇬🇲 Gambia" },
    { "value": "+995", "label": "🇬🇪 Georgia" },
    { "value": "+49", "label": "🇩🇪 Germany" },
    { "value": "+233", "label": "🇬🇭 Ghana" },
    { "value": "+350", "label": "🇬🇮 Gibraltar" },
    { "value": "+30", "label": "🇬🇷 Greece" },
    { "value": "+299", "label": "🇬🇱 Greenland" },
    { "value": "+1-473", "label": "🇬🇩 Grenada" },
    { "value": "+590", "label": "🇬🇵 Guadeloupe" },
    { "value": "+1-671", "label": "🇬🇺 Guam" },
    { "value": "+502", "label": "🇬🇹 Guatemala" },
    { "value": "+44-1481", "label": "🇬🇬 Guernsey" },
    { "value": "+224", "label": "🇬🇳 Guinea" },
    { "value": "+245", "label": "🇬🇼 Guinea-Bissau" },
    { "value": "+592", "label": "🇬🇾 Guyana" },
    { "value": "+509", "label": "🇭🇹 Haiti" },
    { "value": "+504", "label": "🇭🇳 Honduras" },
    { "value": "+852", "label": "🇭🇰 Hong Kong" },
    { "value": "+36", "label": "🇭🇺 Hungary" },
    { "value": "+354", "label": "🇮🇸 Iceland" },
    { "value": "+91", "label": "🇮🇳 India" },
    { "value": "+62", "label": "🇮🇩 Indonesia" },
    { "value": "+98", "label": "🇮🇷 Iran" },
    { "value": "+964", "label": "🇮🇶 Iraq" },
    { "value": "+353", "label": "🇮🇪 Ireland" },
    { "value": "+44-1624", "label": "🇮🇲 Isle of Man" },
    { "value": "+972", "label": "🇮🇱 Israel" },
    { "value": "+39", "label": "🇮🇹 Italy" },
    { "value": "+225", "label": "🇨🇮 Ivory Coast" },
    { "value": "+1-876", "label": "🇯🇲 Jamaica" },
    { "value": "+81", "label": "🇯🇵 Japan" },
    { "value": "+44-1534", "label": "🇯🇪 Jersey" },
    { "value": "+962", "label": "🇯🇴 Jordan" },
    { "value": "+7", "label": "🇰🇿 Kazakhstan" },
    { "value": "+254", "label": "🇰🇪 Kenya" },
    { "value": "+686", "label": "🇰🇮 Kiribati" },
    { "value": "+383", "label": "🇽🇰 Kosovo" },
    { "value": "+965", "label": "🇰🇼 Kuwait" },
    { "value": "+996", "label": "🇰🇬 Kyrgyzstan" },
    { "value": "+856", "label": "🇱🇦 Laos" },
    { "value": "+371", "label": "🇱🇻 Latvia" },
    { "value": "+961", "label": "🇱🇧 Lebanon" },
    { "value": "+266", "label": "🇱🇸 Lesotho" },
    { "value": "+231", "label": "🇱🇷 Liberia" },
    { "value": "+218", "label": "🇱🇾 Libya" },
    { "value": "+423", "label": "🇱🇮 Liechtenstein" },
    { "value": "+370", "label": "🇱🇹 Lithuania" },
    { "value": "+352", "label": "🇱🇺 Luxembourg" },
    { "value": "+853", "label": "🇲🇴 Macau" },
    { "value": "+389", "label": "🇲🇰 Macedonia" },
    { "value": "+261", "label": "🇲🇬 Madagascar" },
    { "value": "+265", "label": "🇲🇼 Malawi" },
    { "value": "+60", "label": "🇲🇾 Malaysia" },
    { "value": "+960", "label": "🇲🇻 Maldives" },
    { "value": "+223", "label": "🇲🇱 Mali" },
    { "value": "+356", "label": "🇲🇹 Malta" },
    { "value": "+692", "label": "🇲🇭 Marshall Islands" },
    { "value": "+596", "label": "🇲🇶 Martinique" },
    { "value": "+222", "label": "🇲🇷 Mauritania" },
    { "value": "+230", "label": "🇲🇺 Mauritius" },
    { "value": "+262", "label": "🇾🇹 Mayotte" },
    { "value": "+52", "label": "🇲🇽 Mexico" },
    { "value": "+691", "label": "🇫🇲 Micronesia" },
    { "value": "+373", "label": "🇲🇩 Moldova" },
    { "value": "+377", "label": "🇲🇨 Monaco" },
    { "value": "+976", "label": "🇲🇳 Mongolia" },
    { "value": "+382", "label": "🇲🇪 Montenegro" },
    { "value": "+1-664", "label": "🇲🇸 Montserrat" },
    { "value": "+212", "label": "🇲🇦 Morocco" },
    { "value": "+258", "label": "🇲🇿 Mozambique" },
    { "value": "+95", "label": "🇲🇲 Myanmar" },
    { "value": "+264", "label": "🇳🇦 Namibia" },
    { "value": "+674", "label": "🇳🇷 Nauru" },
    { "value": "+977", "label": "🇳🇵 Nepal" },
    { "value": "+31", "label": "🇳🇱 Netherlands" },
    { "value": "+599", "label": "🇧🇶 Netherlands Antilles" },
    { "value": "+687", "label": "🇳🇨 New Caledonia" },
    { "value": "+64", "label": "🇳🇿 New Zealand" },
    { "value": "+505", "label": "🇳🇮 Nicaragua" },
    { "value": "+227", "label": "🇳🇪 Niger" },
    { "value": "+234", "label": "🇳🇬 Nigeria" },
    { "value": "+683", "label": "🇳🇺 Niue" },
    { "value": "+672-3", "label": "🇳🇫 Norfolk Island" },
    { "value": "+850", "label": "🇰🇵 North Korea" },
    { "value": "+1-670", "label": "🇲🇵 Northern Mariana Islands" },
    { "value": "+47", "label": "🇳🇴 Norway" },
    { "value": "+968", "label": "🇴🇲 Oman" },
    { "value": "+92", "label": "🇵🇰 Pakistan" },
    { "value": "+680", "label": "🇵🇼 Palau" },
    { "value": "+970", "label": "🇵🇸 Palestine" },
    { "value": "+507", "label": "🇵🇦 Panama" },
    { "value": "+675", "label": "🇵🇬 Papua New Guinea" },
    { "value": "+595", "label": "🇵🇾 Paraguay" },
    { "value": "+51", "label": "🇵🇪 Peru" },
    { "value": "+63", "label": "🇵🇭 Philippines" },
    { "value": "+64-9", "label": "🇵🇳 Pitcairn" },
    { "value": "+48", "label": "🇵🇱 Poland" },
    { "value": "+351", "label": "🇵🇹 Portugal" },
    { "value": "+1-787", "label": "🇵🇷 Puerto Rico" },
    { "value": "+1-939", "label": "🇵🇷 Puerto Rico" },
    { "value": "+974", "label": "🇶🇦 Qatar" },
    { "value": "+242", "label": "🇨🇬 Republic of the Congo" },
    { "value": "+262", "label": "🇷🇪 Reunion" },
    { "value": "+40", "label": "🇷🇴 Romania" },
    { "value": "+7", "label": "🇷🇺 Russia" },
    { "value": "+250", "label": "🇷🇼 Rwanda" },
    { "value": "+590", "label": "🇧🇱 Saint Barthelemy" },
    { "value": "+290", "label": "🇸🇭 Saint Helena" },
    { "value": "+1-869", "label": "🇰🇳 Saint Kitts and Nevis" },
    { "value": "+1-758", "label": "🇱🇨 Saint Lucia" },
    { "value": "+590-590", "label": "🇲🇫 Saint Martin" },
    { "value": "+508", "label": "🇵🇲 Saint Pierre and Miquelon" },
    { "value": "+1-784", "label": "🇻🇨 Saint Vincent and the Grenadines" },
    { "value": "+685", "label": "🇼🇸 Samoa" },
    { "value": "+378", "label": "🇸🇲 San Marino" },
    { "value": "+239", "label": "🇸🇹 Sao Tome and Principe" },
    { "value": "+966", "label": "🇸🇦 Saudi Arabia" },
    { "value": "+221", "label": "🇸🇳 Senegal" },
    { "value": "+381", "label": "🇷🇸 Serbia" },
    { "value": "+248", "label": "🇸🇨 Seychelles" },
    { "value": "+232", "label": "🇸🇱 Sierra Leone" },
    { "value": "+65", "label": "🇸🇬 Singapore" },
    { "value": "+1-721", "label": "🇸🇽 Sint Maarten" },
    { "value": "+421", "label": "🇸🇰 Slovakia" },
    { "value": "+386", "label": "🇸🇮 Slovenia" },
    { "value": "+677", "label": "🇸🇧 Solomon Islands" },
    { "value": "+252", "label": "🇸🇴 Somalia" },
    { "value": "+27", "label": "🇿🇦 South Africa" },
    { "value": "+82", "label": "🇰🇷 South Korea" },
    { "value": "+211", "label": "🇸🇸 South Sudan" },
    { "value": "+34", "label": "🇪🇸 Spain" },
    { "value": "+94", "label": "🇱🇰 Sri Lanka" },
    { "value": "+249", "label": "🇸🇩 Sudan" },
    { "value": "+597", "label": "🇸🇷 Suriname" },
    { "value": "+47-79", "label": "🇸🇯 Svalbard and Jan Mayen" },
    { "value": "+268", "label": "🇸🇿 Swaziland" },
    { "value": "+46", "label": "🇸🇪 Sweden" },
    { "value": "+41", "label": "🇨🇭 Switzerland" },
    { "value": "+963", "label": "🇸🇾 Syria" },
    { "value": "+886", "label": "🇹🇼 Taiwan" },
    { "value": "+992", "label": "🇹🇯 Tajikistan" },
    { "value": "+255", "label": "🇹🇿 Tanzania" },
    { "value": "+66", "label": "🇹🇭 Thailand" },
    { "value": "+228", "label": "🇹🇬 Togo" },
    { "value": "+690", "label": "🇹🇰 Tokelau" },
    { "value": "+676", "label": "🇹🇴 Tonga" },
    { "value": "+1-868", "label": "🇹🇹 Trinidad and Tobago" },
    { "value": "+216", "label": "🇹🇳 Tunisia" },
    { "value": "+90", "label": "🇹🇷 Turkey" },
    { "value": "+993", "label": "🇹🇲 Turkmenistan" },
    { "value": "+1-649", "label": "🇹🇨 Turks and Caicos Islands" },
    { "value": "+688", "label": "🇹🇻 Tuvalu" },
    { "value": "+1-340", "label": "🇻🇮 U.S. Virgin Islands" },
    { "value": "+256", "label": "🇺🇬 Uganda" },
    { "value": "+380", "label": "🇺🇦 Ukraine" },
    { "value": "+44", "label": "🇬🇧 United Kingdom" },
    { "value": "+1", "label": "🇺🇸 United States" },
    { "value": "+598", "label": "🇺🇾 Uruguay" },
    { "value": "+998", "label": "🇺🇿 Uzbekistan" },
    { "value": "+678", "label": "🇻🇺 Vanuatu" },
    { "value": "+379", "label": "🇻🇦 Vatican" },
    { "value": "+58", "label": "🇻🇪 Venezuela" },
    { "value": "+84", "label": "🇻🇳 Vietnam" },
    { "value": "+681", "label": "🇼🇫 Wallis and Futuna" },
    { "value": "+212", "label": "🇪🇭 Western Sahara" },
    { "value": "+967", "label": "🇾🇪 Yemen" },
    { "value": "+260", "label": "🇿🇲 Zambia" },
    { "value": "+263", "label": "🇿🇼 Zimbabwe" }
].map(item => ({...item, id: `${item.label}-${item.value}`, fullLabel: `${item.label} (${item.value})`}));

const waitlistFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).describe("The user's full name."),
  email: z.string().email({ message: "Please enter a valid email address." }).describe("The user's email address."),
  countryCode: z.string().describe("The user's phone country code."),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }).describe("The user's phone number."),
  source: z.string({ required_error: "Please let us know how you found us."}).describe("How the user heard about TAVU."),
  consent: z.boolean().refine((value) => value === true, {
    message: "You must agree to receive TAVÚ emails and updates.",
  }).describe("Whether the user consented to receive emails."),
})

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>

export default function WaitlistForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+971",
      phone: "",
      source: "",
      consent: false,
    },
  })

  // We need a separate handler for the form submission
  // that doesn't rely on react-hook-form's `data` object,
  // because emailjs.sendForm works directly with the form element.
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // First, trigger validation from react-hook-form
    form.trigger().then((isValid) => {
        if (!isValid) {
            toast({
                variant: "destructive",
                title: "Please check the form.",
                description: "There are some errors in your submission.",
            });
            return;
        }

        // If valid, proceed with EmailJS
        setIsSubmitting(true);
        const serviceId = 'service_of1hcns';
        const templateId = 'template_3995qur';
        const publicKey = 'ChMo0khtrBlMBc2q1';

        if (!formRef.current) {
            console.error("EmailJS form ref is not available.");
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Could not send the form. Please contact us directly.",
            });
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            toast({
              title: "You're on the list!",
              description: "Thank you for joining the TAVÚ waitlist. We'll be in touch soon.",
            });
            form.reset();
          })
          .catch((err) => {
            console.error('FAILED...', err);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem submitting your request. Please try again.",
            });
          })
          .finally(() => {
            setIsSubmitting(false);
          });
    });
  }

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-2xl rounded-2xl bg-white/90 backdrop-blur-sm border-border/20">
        <CardHeader className="text-center pt-10 pb-4">
          <CardTitle className="text-4xl md:text-5xl font-body text-primary">Reserve Your Spot</CardTitle>
          <CardDescription className="text-xl font-body pt-2 text-muted-foreground max-w-lg mx-auto">
            Spots are limited. Moments are not. Be there when the doors open.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <Form {...form}>
            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline text-base text-primary">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} className="py-6 text-lg font-body bg-secondary/80 border-border/50 focus:bg-white"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-headline text-base text-primary">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} className="py-6 text-lg font-body bg-secondary/80 border-border/50 focus:bg-white"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormItem>
                <FormLabel className="font-headline text-base text-primary">Phone Number</FormLabel>
                <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                          <FormItem className="w-2/3">
                               {/* This hidden input is for emailjs to grab the value */}
                              <input type="hidden" name="countryCode" value={field.value} />
                              <Combobox
                                  items={countryCodes}
                                  value={field.value}
                                  onChange={field.onChange}
                                  placeholder="Select country..."
                                  searchPlaceholder="Search country..."
                                  notFoundText="No country found."
                                  triggerClassName="py-6 text-lg font-body bg-secondary/80 border-border/50 focus:bg-white"
                              />
                              <FormMessage />
                          </FormItem>
                      )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                            <Input placeholder="55 555 5555" {...field} className="py-6 text-lg font-body bg-secondary/80 border-border/50 focus:bg-white"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
              </FormItem>

              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-headline text-base text-primary">How did you hear about us?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                      <FormControl>
                        <SelectTrigger className="py-6 text-lg font-body bg-secondary/80 border-border/50 focus:bg-white">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {sources.map(source => (
                          <SelectItem key={source.id} value={source.id}>{source.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-muted/70 border border-border/50">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="h-5 w-5 mt-1"
                          name={field.name}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-body text-base text-muted-foreground cursor-pointer">
                          I agree to receive TAVÚ emails and updates. I can unsubscribe at any time.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              <Button type="submit" variant="destructive" className="w-full text-xl font-body py-7 rounded-full transition-transform duration-300 hover:scale-105" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                      <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                      </>
                  ) : (
                      <>
                          Claim My Spot
                          <ArrowRight className="ml-2 h-5 w-5"/>
                      </>
                  )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}

    
