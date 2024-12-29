"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { useState } from "react";


export default function EntryButton(){
    const [isChecked,setIsChecked] = useState(false);
    return(
    <div className="mb-20 mt-10">
        <Dialog>
            <DialogTrigger asChild>
            <Button 
                variant="aimagic" 
                size="lg" 
                className="text-xl shine bg-gradient-to-r from-blue-800 via-violet-400/20 to-blue-800" 
                >
                    Meet Your New AI Friend
            </Button>
            </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle className="text-center">Verification</DialogTitle>
                    <DialogDescription >
                        <Checkbox 
                            checked={isChecked}
                            onCheckedChange={(checked)=> setIsChecked(!!checked)}
                        /> I have read and agree to the Hanami Link, Privacy Policy, and Terms and Conditions and attest that I am at least 18 years old.
                    </DialogDescription>
                    {isChecked ? (
                        <Link href="/dashboard">
                            <Button variant="aimagic" className="w-full">Enter</Button>
                        </Link>
                    ): (
                        <Button className="mt-10" variant="secondary">Enter</Button>
                    )}
                    </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
    );
}