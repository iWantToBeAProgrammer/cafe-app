import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import { Coffee } from "lucide-react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="absolute top-4 right-4">
                <DarkModeToggle />
            </div>

            <div className="flex w-full max-w-sm flex-col gap-6">
                <div className="flex items-center gap-2 self-center font-medium">
                    <div className="flex items-center justify-center rounded-md p-2 bg-teal-500">

                    <Coffee className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg">Cafe App</span>
                </div>
                {children}
            </div>
        </div>
    );
}