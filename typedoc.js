module.exports = {
    inputFiles: ["src"],
    mode: "file",
    includeDeclarations: true,
    tsconfig: "tsconfig.json",
    out: "docs",
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    readme: "README.md",
    name: "kitai",
    ignoreCompilerErrors: true,
    listInvalidSymbolLinks: true
};
