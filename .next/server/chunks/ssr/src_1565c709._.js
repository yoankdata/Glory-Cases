module.exports = [
"[project]/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════════════════════════
// GLORY CASES - Constantes Centralisées
// Modifiez ces valeurs à un seul endroit pour tout le site
// ═══════════════════════════════════════════════════════════════════════════
// WhatsApp
__turbopack_context__.s([
    "COMPANY",
    ()=>COMPANY,
    "WHATSAPP_NUMBER",
    ()=>WHATSAPP_NUMBER,
    "WHATSAPP_URL",
    ()=>WHATSAPP_URL,
    "createWhatsAppUrl",
    ()=>createWhatsAppUrl
]);
const WHATSAPP_NUMBER = '22507756297';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
function createWhatsAppUrl(message) {
    return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
const COMPANY = {
    name: 'Glory Cases',
    legalName: 'BLONE',
    phone: '+225 07 75 62 97',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    url: 'https://glorycases.com'
};
}),
"[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const linkClasses = (path)=>`
        transition-colors duration-300 relative
        ${pathname === path ? 'text-terracotta' : 'text-petrol hover:text-terracotta'}
    `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-nav px-6 py-4 md:px-12 bg-sand/80 backdrop-blur-md border-b border-petrol/5 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "font-display text-2xl md:text-3xl text-petrol hover:text-terracotta transition-colors",
                        children: [
                            "Glory",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 26,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/atelier",
                                className: linkClasses('/atelier'),
                                children: "L'Atelier"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/collection",
                                className: linkClasses('/collection'),
                                children: "Collection"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pro",
                                className: linkClasses('/pro'),
                                children: "Espace Pro"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WHATSAPP_URL"],
                                target: "_blank",
                                className: "btn-gold btn-sm",
                                children: "Commander"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden flex flex-col gap-1.5 p-2",
                        "aria-label": "Menu",
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-6 h-0.5 bg-petrol transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-4 h-0.5 bg-petrol transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-6 h-0.5 bg-petrol transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-overlay bg-sand/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-in fade-in duration-300 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "font-display text-4xl text-petrol hover:text-terracotta transition-colors",
                        onClick: ()=>setIsMobileMenuOpen(false),
                        children: "Accueil"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/atelier",
                        className: "font-display text-4xl text-petrol hover:text-terracotta transition-colors",
                        onClick: ()=>setIsMobileMenuOpen(false),
                        children: "L'Atelier"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/collection",
                        className: "font-display text-4xl text-petrol hover:text-terracotta transition-colors",
                        onClick: ()=>setIsMobileMenuOpen(false),
                        children: "Collection"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/pro",
                        className: "font-display text-4xl text-petrol hover:text-terracotta transition-colors",
                        onClick: ()=>setIsMobileMenuOpen(false),
                        children: "Espace Pro"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-ssr] (ecmascript)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-16 px-6 border-t border-petrol/10 bg-sand",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-4 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "font-display text-3xl text-petrol",
                                    children: [
                                        "Glory",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gold",
                                            children: "."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 12,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-petrol/60 max-w-sm",
                                    children: "Étuis à lunettes artisanaux faits main à Abidjan. L'Afro-Minimalisme au service de votre regard."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 14,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 10,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-mono text-sm uppercase tracking-wider text-petrol mb-4",
                                    children: "Navigation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-petrol/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/collection",
                                                className: "hover:text-terracotta transition-colors",
                                                children: "Collection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/atelier",
                                                className: "hover:text-terracotta transition-colors",
                                                children: "L'Atelier"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/pro",
                                                className: "hover:text-terracotta transition-colors",
                                                children: "Espace Pro"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-mono text-sm uppercase tracking-wider text-petrol mb-4",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-petrol/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Abidjan, Côte d'Ivoire"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WHATSAPP_URL"],
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "hover:text-terracotta transition-colors",
                                                children: "WhatsApp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 pt-8 border-t border-petrol/5 flex flex-col md:flex-row justify-between items-center text-sm text-petrol/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2025 Glory Cases. Tous droits réservés."
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/mentions-legales",
                                    className: "hover:text-petrol",
                                    children: "Mentions Légales"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cgv",
                                    className: "hover:text-petrol",
                                    children: "CGV"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/lib/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ═══════════════════════════════════════════════════════════════════════════
// GLORY CASES - Données Produits (Mock Data)
// Ces données seront remplacées par Sanity.io ultérieurement
// ═══════════════════════════════════════════════════════════════════════════
// GRILLE TARIFAIRE :
// - 5 000 FCFA : Étui simple
// - 10 000 FCFA : Étui deux tissus / bijou / cauri
// - 15 000 FCFA : Étui personnalisé (gravure)
// ═══════════════════════════════════════════════════════════════════════════
__turbopack_context__.s([
    "formatPrice",
    ()=>formatPrice,
    "getFeaturedProducts",
    ()=>getFeaturedProducts,
    "getProductBySlug",
    ()=>getProductBySlug,
    "getProductsByMaterial",
    ()=>getProductsByMaterial,
    "products",
    ()=>products
]);
const products = [
    // ═══════════════════════════════════════════════════════════════════════
    // PRODUITS VEDETTES (featured: true)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id: '1',
        slug: 'heritage-cowrie',
        title: 'Héritage Cauri',
        subtitle: "L'Étui Signature",
        description: `Une pièce de caractère qui marie l'authenticité du Wax aux lignes graphiques noires et blanches.
La bande ocre structure l'ensemble, sublimée par un cauri naturel posé à la main.
Le mariage parfait entre design contemporain et matière noble.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax & Cauri',
        colors: [
            'Noir',
            'Blanc',
            'Ocre'
        ],
        images: [
            '/images/products/etui-cowrie-tribal.jpg'
        ],
        featured: true,
        new: false
    },
    {
        id: '2',
        slug: 'geo-lagoon',
        title: 'Lagune Géométrique',
        subtitle: 'Lignes Cinétiques',
        description: `Un jeu visuel captivant où les motifs géométriques bleus rencontrent des touches orangées vibrantes.
Cet étui apporte une note de fraîcheur et de modernité à votre quotidien.
Une esthétique pop et soignée pour les amateurs de couleurs franches.`,
        price: 10000,
        currency: 'XOF',
        material: 'textile',
        materialLabel: 'Textile Graphique',
        colors: [
            'Bleu Cyan',
            'Blanc',
            'Orange'
        ],
        images: [
            '/images/products/etui-geo-blue.jpg'
        ],
        featured: true,
        new: false
    },
    {
        id: '3',
        slug: 'kente-royal',
        title: 'Kente Royal',
        subtitle: "Tissage d'Exception",
        description: `Inspiré par la complexité des tissages Akan, cet étui révèle une richesse de détails colorés.
Les teintes vertes et or s'entremêlent avec précision pour un rendu visuel sophistiqué.
Plus qu'un accessoire, une pièce d'artisanat qui a du sens.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Type Kente',
        colors: [
            'Vert',
            'Or',
            'Rouge'
        ],
        images: [
            '/images/products/etui-kente-finish.jpg'
        ],
        featured: true,
        new: false
    },
    {
        id: '4',
        slug: 'bijoux-royaux',
        title: 'Bijoux Royaux',
        subtitle: 'Luxe Artisanal',
        description: `Un étui d'exception orné de bijoux traditionnels soigneusement sélectionnés.
Chaque pièce est unique, assemblée à la main pour créer une œuvre d'art portable.
Le summum du raffinement africain.`,
        price: 10000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir & Bijoux',
        colors: [
            'Brun',
            'Or',
            'Bronze'
        ],
        images: [
            '/images/products/étui avec bijoux 2.jpg'
        ],
        featured: true,
        new: false
    },
    {
        id: '5',
        slug: 'gravure-elite',
        title: 'Gravure Elite',
        subtitle: 'Prestige Personnalisé',
        description: `Votre marque, votre logo, votre identité gravée dans le cuir premium.
Une finition impeccable pour les professionnels exigeants.
L'accessoire qui vous distingue du reste.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Gravé',
        colors: [
            'Marron',
            'Or'
        ],
        images: [
            '/images/products/étui gravure perso 2.jpg'
        ],
        featured: true,
        new: false
    },
    // ═══════════════════════════════════════════════════════════════════════
    // ÉTUIS SIMPLES (5 000 FCFA)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id: '6',
        slug: 'midnight-prestige',
        title: 'Midnight Prestige',
        subtitle: 'Le Noir Intemporel',
        description: `L'essentiel, sans superflu. Un noir profond et texturé pour une allure résolument chic.
Le logo doré vient signer cette pièce minimaliste avec subtilité.
L'accessoire ultime pour accompagner toutes vos tenues.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: [
            'Noir',
            'Or'
        ],
        images: [
            '/images/products/etui-black-minimal.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '7',
        slug: 'bleu-marine-classique',
        title: 'Bleu Marine Classique',
        subtitle: "L'Élégance Sobre",
        description: `Un bleu marine profond et intemporel qui s'accorde à toutes les occasions.
La sobriété devient une force avec ce cuir lisse et soigné.
Pour ceux qui privilégient l'élégance discrète.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: [
            'Bleu Marine'
        ],
        images: [
            '/images/products/etui-navy-classic.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '8',
        slug: 'bleu-azur',
        title: 'Bleu Azur',
        subtitle: 'Simplicité Pure',
        description: `La pureté d'un bleu ciel qui respire la fraîcheur et la légèreté.
Un étui simple mais efficace pour un style décontracté.
L'accessoire parfait pour les beaux jours.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: [
            'Bleu Azur'
        ],
        images: [
            '/images/products/etui simple bleu.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '9',
        slug: 'bleu-nuit',
        title: 'Bleu Nuit',
        subtitle: 'Nuit Étoilée',
        description: `Un bleu nuit envoûtant qui évoque le mystère des cieux nocturnes.
Profond et sophistiqué, il accompagne vos soirées avec distinction.
L'élégance à l'état pur.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: [
            'Bleu Nuit'
        ],
        images: [
            '/images/products/étui simple bleu nuit.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '10',
        slug: 'noir-essentiel',
        title: 'Noir Essentiel',
        subtitle: 'Le Classique',
        description: `Le noir dans sa forme la plus pure et la plus polyvalente.
Minimaliste et efficace, il va avec absolument tout.
Le choix évident pour ceux qui aiment l'essentiel.`,
        price: 5000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Simili Cuir',
        colors: [
            'Noir'
        ],
        images: [
            '/images/products/étui simple noir.jpg'
        ],
        featured: false,
        new: false
    },
    // ═══════════════════════════════════════════════════════════════════════
    // ÉTUIS DEUX TISSUS / BIJOU / CAURI (10 000 FCFA)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id: '11',
        slug: 'terra-signature',
        title: 'Terra Signature',
        subtitle: 'Nuances Minérales',
        description: `Une palette chaleureuse dominée par des tons rouille et terre de Sienne.
Le motif abstrait évoque une texture organique, réhaussée par la signature Glory dorée.
Un accessoire sobre et élégant qui traverse les saisons.`,
        price: 10000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir & Wax',
        colors: [
            'Rouille',
            'Brun',
            'Noir'
        ],
        images: [
            '/images/products/etui-terra-logo.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '12',
        slug: 'wax-abstrait',
        title: 'Wax Abstrait',
        subtitle: 'Art Géométrique',
        description: `Une explosion de formes géométriques sur un tissu Wax authentique.
L'art africain contemporain s'invite dans votre quotidien.
Pour les amateurs de pièces uniques et audacieuses.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Imprimé',
        colors: [
            'Multicolore'
        ],
        images: [
            '/images/products/etui-wax-abstrait.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '13',
        slug: 'corail-solaire',
        title: 'Corail Solaire',
        subtitle: "Éclat d'Été",
        description: `Des teintes corail et orangées qui capturent l'énergie du soleil africain.
Un motif Wax joyeux et optimiste pour illuminer votre journée.
L'accessoire qui met de bonne humeur.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Imprimé',
        colors: [
            'Corail',
            'Orange',
            'Jaune'
        ],
        images: [
            '/images/products/etui-wax-coral.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '14',
        slug: 'wax-ombre',
        title: 'Wax Ombré',
        subtitle: 'Mystère Élégant',
        description: `Des tons sombres et mystérieux pour un Wax qui sort de l'ordinaire.
La profondeur des couleurs crée un effet visuel captivant.
Pour ceux qui aiment l'élégance discrète avec du caractère.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Imprimé',
        colors: [
            'Noir',
            'Bordeaux',
            'Brun'
        ],
        images: [
            '/images/products/etui-wax-sombre.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '15',
        slug: 'tribal-wax',
        title: 'Tribal Wax',
        subtitle: 'Héritage Ancestral',
        description: `Des motifs tribaux traditionnels revisités avec modernité.
Chaque ligne raconte une histoire, chaque couleur a un sens.
L'Afrique authentique dans votre poche.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Tribal',
        colors: [
            'Multicolore'
        ],
        images: [
            '/images/products/etui-wax-tribal.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '16',
        slug: 'bleu-ocean-double',
        title: 'Bleu Océan Doublé',
        subtitle: 'Confort Premium',
        description: `Un étui doublé pour une protection maximale de votre téléphone.
Le bleu océan apporte une touche de sérénité à votre quotidien.
Qualité et confort réunis.`,
        price: 10000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Doublé',
        colors: [
            'Bleu Océan'
        ],
        images: [
            '/images/products/etui simple bleu doublé.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '17',
        slug: 'denim-spirit',
        title: 'Denim Spirit',
        subtitle: 'Style Urbain',
        description: `Le jean revisité façon Glory Cases pour un style résolument urbain.
Un matériau résistant et tendance qui s'améliore avec le temps.
L'esprit street dans votre poche.`,
        price: 10000,
        currency: 'XOF',
        material: 'textile',
        materialLabel: 'Denim',
        colors: [
            'Bleu Jean'
        ],
        images: [
            '/images/products/étui en jean.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '18',
        slug: 'duo-textile',
        title: 'Duo Textile',
        subtitle: 'Fusion Créative',
        description: `Deux tissus complémentaires assemblés avec savoir-faire pour un rendu unique.
Le mariage des textures crée une harmonie visuelle captivante.
Pour ceux qui aiment les mélanges audacieux.`,
        price: 10000,
        currency: 'XOF',
        material: 'textile',
        materialLabel: 'Double Tissu',
        colors: [
            'Multicolore'
        ],
        images: [
            '/images/products/étui double tissu.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '19',
        slug: 'rouge-passion',
        title: 'Rouge Passion',
        subtitle: 'Énergie Vibrante',
        description: `Un rouge intense qui pulse avec l'énergie de la passion africaine.
Impossible à ignorer, il fait tourner les têtes.
Pour les personnalités audacieuses et assumées.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Imprimé',
        colors: [
            'Rouge',
            'Noir'
        ],
        images: [
            '/images/products/étui motif rouge.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '20',
        slug: 'cauri-naturel',
        title: 'Cauri Naturel',
        subtitle: 'Amulette Protectrice',
        description: `Le cauri, symbole ancestral de richesse et de protection, orne cet étui unique.
Chaque coquillage est sélectionné et posé à la main.
Portez un morceau de tradition africaine.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax & Cauri',
        colors: [
            'Multicolore',
            'Naturel'
        ],
        images: [
            '/images/products/étui avec cory.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '21',
        slug: 'naturel-cauri',
        title: 'Naturel & Cauri',
        subtitle: 'Essence Africaine',
        description: `L'authenticité à l'état pur avec ce mélange de textures naturelles.
Le cauri ajoute une touche de spiritualité à chaque regard.
Un accessoire chargé de sens.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax & Cauri',
        colors: [
            'Naturel',
            'Brun'
        ],
        images: [
            '/images/products/étui avce cory.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '22',
        slug: 'geo-cauri',
        title: 'Géo Cauri',
        subtitle: 'Modernité Sacrée',
        description: `Les formes géométriques modernes rencontrent le symbolisme ancestral du cauri.
Une fusion parfaite entre contemporain et tradition.
L'Afrique d'hier et d'aujourd'hui réunies.`,
        price: 10000,
        currency: 'XOF',
        material: 'wax',
        materialLabel: 'Wax Géométrique & Cauri',
        colors: [
            'Bleu',
            'Noir',
            'Naturel'
        ],
        images: [
            '/images/products/étui form géo avec cory.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '23',
        slug: 'bijou-dor',
        title: "Bijou d'Or",
        subtitle: 'Parure Précieuse',
        description: `Un bijou doré vient sublimer cet étui en cuir de qualité.
L'alliance du cuir et de l'or pour un résultat raffiné.
L'élégance à l'africaine.`,
        price: 10000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir & Bijou',
        colors: [
            'Brun',
            'Or'
        ],
        images: [
            '/images/products/étui avec bijou 2.jpg'
        ],
        featured: false,
        new: false
    },
    // ═══════════════════════════════════════════════════════════════════════
    // ÉTUIS PERSONNALISÉS - GRAVURE (15 000 FCFA)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id: '24',
        slug: 'gravure-signature',
        title: 'Gravure Signature',
        subtitle: 'Personnalisé',
        description: `Votre nom, votre logo ou votre message gravé dans le cuir premium.
Une finition artisanale pour un résultat unique.
Faites de votre étui une pièce véritablement vôtre.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Gravé',
        colors: [
            'Marron',
            'Or'
        ],
        images: [
            '/images/products/example étui avec marque gravé.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '25',
        slug: 'logo-grave',
        title: 'Logo Gravé',
        subtitle: 'Identité Unique',
        description: `Parfait pour les entreprises et les professionnels.
Votre marque gravée avec précision sur un cuir haut de gamme.
Un cadeau d'entreprise qui marque les esprits.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Gravé',
        colors: [
            'Marron',
            'Or'
        ],
        images: [
            '/images/products/example étui avec marque gravé 2.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '26',
        slug: 'gravure-perso',
        title: 'Gravure Perso',
        subtitle: 'Création Sur-Mesure',
        description: `Libérez votre créativité avec une gravure entièrement personnalisée.
Texte, symbole, motif : tout est possible.
L'accessoire qui vous ressemble vraiment.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Gravé',
        colors: [
            'Brun',
            'Naturel'
        ],
        images: [
            '/images/products/tui gravure perso.jpg'
        ],
        featured: false,
        new: false
    },
    {
        id: '27',
        slug: 'gravure-premium',
        title: 'Gravure Premium',
        subtitle: "L'Excellence",
        description: `Notre savoir-faire au service de votre vision.
Une gravure d'une finesse exceptionnelle sur notre meilleur cuir.
Le summum de la personnalisation.`,
        price: 15000,
        currency: 'XOF',
        material: 'cuir',
        materialLabel: 'Cuir Premium Gravé',
        colors: [
            'Marron Foncé',
            'Or'
        ],
        images: [
            '/images/products/étui gravur perso 3.jpg'
        ],
        featured: false,
        new: false
    }
];
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
}
function getProductBySlug(slug) {
    return products.find((p)=>p.slug === slug);
}
function getFeaturedProducts() {
    return products.filter((p)=>p.featured);
}
function getProductsByMaterial(material) {
    return products.filter((p)=>p.material === material);
}
}),
"[project]/src/app/collection/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/products.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// ═══════════════════════════════════════════════════════════════════════════
// 1. COMPOSANTS UI (Cartes, Nav, etc.)
// ═══════════════════════════════════════════════════════════════════════════
// Simplification : Plus besoin de prop 'size', on utilise un ratio standard
function ProductCard({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/product/${product.slug}`,
        className: "group relative block w-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-glass-xl hover:-translate-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[3/4] w-full overflow-hidden bg-sand/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: product.images[0],
                        alt: product.title,
                        fill: true,
                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                        className: "object-cover transition-transform duration-700 group-hover:scale-105",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/src/app/collection/page.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-petrol/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/app/collection/page.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    product.new && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-3 left-3 px-2 py-1 bg-gold text-white text-[10px] font-mono uppercase tracking-widest rounded-sm z-10 shadow-sm",
                        children: "Nouveau"
                    }, void 0, false, {
                        fileName: "[project]/src/app/collection/page.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-petrol/50 font-mono uppercase tracking-wider mb-1 block",
                                        children: product.materialLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collection/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-xl text-petrol group-hover:text-terracotta transition-colors",
                                        children: product.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collection/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-gold-700",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(product.price)
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/collection/page.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-petrol/60 line-clamp-1",
                        children: product.subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/collection/page.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/collection/page.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
function CollectionFeed() {
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (activeFilter === 'all') return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"];
        // Filtre par type de produit basé sur le prix et le materialLabel
        switch(activeFilter){
            case 'simple':
                // Étuis simples à 5000 FCFA
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.price === 5000);
            case 'double':
                // Double tissu / Wax à 10000 FCFA (exclut bijou/cauri)
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.price === 10000 && !p.materialLabel.toLowerCase().includes('bijou') && !p.materialLabel.toLowerCase().includes('cauri'));
            case 'bijou':
                // Bijou ou Cauri à 10000 FCFA
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.price === 10000 && (p.materialLabel.toLowerCase().includes('bijou') || p.materialLabel.toLowerCase().includes('cauri')));
            case 'perso':
                // Personnalisation (gravure) à 15000 FCFA
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.price === 15000);
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"];
        }
    }, [
        activeFilter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky top-[70px] z-40 bg-sand/95 backdrop-blur-md border-b border-petrol/5 py-4 mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-3 md:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs uppercase tracking-widest text-petrol/40 mr-2 hidden md:inline",
                                children: "Catégorie :"
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                                label: "Tout voir",
                                isActive: activeFilter === 'all',
                                onClick: ()=>setActiveFilter('all')
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                                label: "Étui Simple",
                                colorClass: "from-slate-400 to-slate-300",
                                isActive: activeFilter === 'simple',
                                onClick: ()=>setActiveFilter('simple')
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                                label: "Double Tissu",
                                colorClass: "from-terracotta to-gold",
                                isActive: activeFilter === 'double',
                                onClick: ()=>setActiveFilter('double')
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                                label: "Bijou & Cauri",
                                colorClass: "from-amber-500 to-yellow-400",
                                isActive: activeFilter === 'bijou',
                                onClick: ()=>setActiveFilter('bijou')
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 132,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                                label: "Personnalisation",
                                colorClass: "from-amber-800 to-amber-600",
                                isActive: activeFilter === 'perso',
                                onClick: ()=>setActiveFilter('perso')
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 138,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/collection/page.tsx",
                        lineNumber: 110,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/collection/page.tsx",
                    lineNumber: 109,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb-32 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: filteredProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700",
                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                product: product
                            }, product.id, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 154,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/collection/page.tsx",
                        lineNumber: 152,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-32 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-2xl text-petrol/30",
                                children: "Aucune pièce disponible dans cette matière."
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 159,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFilter('all'),
                                className: "btn-gold btn-md",
                                children: "Voir toute la collection"
                            }, void 0, false, {
                                fileName: "[project]/src/app/collection/page.tsx",
                                lineNumber: 160,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/collection/page.tsx",
                        lineNumber: 158,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/collection/page.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function FilterButton({ label, colorClass, isActive, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `group flex items-center gap-2 px-5 py-2.5 font-mono text-xs uppercase tracking-wider rounded-full transition-all duration-300 border
                ${isActive ? 'bg-petrol border-petrol text-white shadow-md transform scale-105' : 'bg-white border-petrol/10 text-petrol/70 hover:border-terracotta hover:text-terracotta'}`,
        children: [
            colorClass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-3 h-3 rounded-full bg-gradient-to-br ${colorClass} ${isActive ? 'ring-2 ring-white/30' : ''}`
            }, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 185,
                columnNumber: 17
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/collection/page.tsx",
        lineNumber: 176,
        columnNumber: 9
    }, this);
}
function CollectionPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-sand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-40 pb-12 px-6 bg-sand",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-xs uppercase tracking-[0.4em] text-terracotta mb-6",
                            children: "Artisanat d'exception"
                        }, void 0, false, {
                            fileName: "[project]/src/app/collection/page.tsx",
                            lineNumber: 204,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-display text-5xl md:text-7xl mb-8 text-petrol",
                            children: "La Collection"
                        }, void 0, false, {
                            fileName: "[project]/src/app/collection/page.tsx",
                            lineNumber: 207,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-petrol/70 max-w-2xl mx-auto leading-relaxed",
                            children: "Découvrez nos créations uniques, façonnées à la main. Une fusion entre tradition artisanale et design contemporain."
                        }, void 0, false, {
                            fileName: "[project]/src/app/collection/page.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/collection/page.tsx",
                    lineNumber: 203,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 202,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CollectionFeed, {}, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 217,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CtaSection, {}, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 219,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/collection/page.tsx",
        lineNumber: 198,
        columnNumber: 9
    }, this);
}
function CtaSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 px-6 bg-petrol text-white text-center rounded-t-[3rem] mx-2 lg:mx-6 shadow-2xl shadow-petrol/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display text-3xl md:text-5xl mb-6",
                children: "Coup de cœur ?"
            }, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 228,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/70 mb-10 max-w-md mx-auto text-lg",
                children: "Nous sommes disponibles pour vous conseiller et personnaliser votre commande."
            }, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "https://wa.me/22507756297",
                target: "_blank",
                className: "inline-block bg-gold text-petrol px-10 py-4 font-mono font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 rounded-sm",
                children: "Commander sur WhatsApp"
            }, void 0, false, {
                fileName: "[project]/src/app/collection/page.tsx",
                lineNumber: 232,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/collection/page.tsx",
        lineNumber: 227,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_1565c709._.js.map