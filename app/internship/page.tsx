'use client';

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { File } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast"

const InternshipPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [interest, setInterest] = useState('');
    const [resume, setResume] = useState<File | null>(null);
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false); // Add loading state
    const { toast } = useToast()
    const fileInputRef = useRef<HTMLInputElement>(null);

    const monthlyStipend = '₹5,000 per month (negotiable based on skills)';

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (name === 'name') setName(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'interest') setInterest(value);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setResume(event.target.files[0]);
        } else {
            setResume(null);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setSubmissionStatus('Submitting...');
        setLoading(true);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('interest', interest);
        if (resume) {
            formData.append('resume', resume);
        }

        try {
            const res = await fetch('/api/internship', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                throw new Error('Failed to send application.');
            }

            setName('');
            setEmail('');
            setInterest('');
            setResume(null);
            setSubmissionStatus('Application submitted successfully!');
            toast({
                title: "Success",
                description: "Your application has been submitted successfully!",
            })
        } catch (error: any) {
            setSubmissionStatus('Failed to submit application.');
            toast({
                title: "Error",
                description: error.message || "Something went wrong",
            })
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-16 px-4 md:px-6 lg:px-8 bg-neutral-900 text-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400">
                    Internship Application
                </h2>
                <p className="mb-4 text-lg text-neutral-300 text-center">
                    Join our dynamic team and gain valuable experience!
                </p>
                <div className="bg-neutral-800 rounded-md shadow-md p-6 border border-neutral-700">
                    <h3 className="text-xl font-semibold mb-4 text-neutral-200">Monthly Stipend</h3>
                    <p className="text-neutral-300 mb-6">{monthlyStipend}</p>

                    <h3 className="text-xl font-semibold mb-4 text-neutral-200">Apply Now</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name" className="block text-sm font-medium text-neutral-200">
                                Name:
                            </Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400"
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="email" className="block text-sm font-medium text-neutral-200">
                                Email:
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                placeholder="you@example.com"
                                className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400"
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="interest" className="block text-sm font-medium text-neutral-200">
                                Area of Interest:
                            </Label>
                            <Textarea
                                id="interest"
                                name="interest"
                                value={interest}
                                onChange={handleInputChange}
                                placeholder="Tell us why you'd like to intern with us..."
                                className="bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400"
                                rows={4}
                            />
                        </div>
                        <div>
                            <Label htmlFor="resume" className="block text-sm font-medium text-neutral-200">
                                Resume (PDF or DOCX):
                            </Label>
                            <Input
                                type="file"
                                id="resume"
                                accept=".pdf,.docx"
                                onChange={handleFileChange}
                                className="bg-neutral-700 border-neutral-600 text-white"

                            />
                            {resume && (
                                <p className="text-neutral-400 text-sm mt-1 flex items-center gap-1">
                                    <File className="w-4 h-4" />
                                    <span>Selected file: {resume.name}</span>
                                </p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Application'}
                        </Button>
                        {submissionStatus && (
                            <p className={`mt-4 text-center ${submissionStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                                {submissionStatus}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InternshipPage;
