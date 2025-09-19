let desejoDoUsuario = confirm("Deseja continuar o cadastro?");

if (desejoDoUsuario) {
    alert("Cadastro em processo.");
    // Redireciona para a tela de cadastro
} else {
    alert("Cadastro cancelado.");
    // Redireciona para a página inicial
    window.location.href = "index.html"; // Verifique se essa página existe
}
