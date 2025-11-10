"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Palmtree,
  Home,
  MessageSquare,
  Upload,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/chat", label: "AI Assistant", icon: MessageSquare },
    { href: "/files", label: "Documents", icon: Upload },
    { href: "/guide", label: "Guide", icon: BookOpen },
  ];

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-orange-500" />
            <Palmtree className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl">Aruba Relocation</span>
          </Link>

          <div className="flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "gap-2",
                      isActive && "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{link.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
