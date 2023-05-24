module.exports = {
    devServer: {
        port: 8080,
    },
    transpileDependencies: [
      'vuetify',
    ],
    resolve: {
        extensions: [".js", ".ts"]
      },
    runtimeCompiler: true,
}
