// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Coleta os valores de todos os campos do formulário
    const formData = {
        denominacao: document.getElementById('denominacao').value,
        igreja_local: document.getElementById('igreja_local').value,
        nome: document.getElementById('nome').value,
        data_nascimento: document.getElementById('data_nascimento').value,
        naturalidade: document.getElementById('naturalidade').value,
        estado_civil: document.getElementById('estado_civil').value,
        conjuge: document.getElementById('conjuge').value,
        filiacao_pai: document.getElementById('filiacao_pai').value,
        filiacao_mae: document.getElementById('filiacao_mae').value,
        situacao_profissional: document.querySelector('input[name="situacao_profissional"]:checked').value,
        profissao: document.getElementById('profissao').value,
        escolaridade: document.getElementById('tipos').value,
        rg: document.getElementById('rg').value,
        cpf: document.getElementById('cpf').value,
        telefone1: document.getElementById('telefone1').value,
        telefone2: document.getElementById('telefone2').value,
        telefone3: document.getElementById('telefone3').value,
        endereco: document.getElementById('endereco').value,
        numero: document.getElementById('numero').value,
        setor_bairro: document.getElementById('setor/bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        cep: document.getElementById('cep').value,
        batismo_espirito_santo: document.querySelector('input[name="batismo_espirito_santo"]:checked').value,
        data_batismo_espirito: document.getElementById('data_batismo_espirito').value,
        batismo_aguas: document.querySelector('input[name="batismo_aguas"]:checked').value,
        data_batismo_aguas: document.getElementById('data_batismo_aguas').value,
        igreja_batismo_aguas: document.getElementById('igreja_batismo_aguas').value,
        // Adicione outros campos conforme necessário
    };

    // Envia os dados para o Firestore
    enviarDadosParaFirestore(formData)
        .then(() => {
            // Limpa o formulário após o envio bem-sucedido
            document.getElementById('formaCadastro').reset();
            alert('Dados enviados com sucesso!');
        })
        .catch(error => {
            // Lida com erros, se houver algum
            console.error('Erro ao enviar dados para o Firestore:', error);
            alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente mais tarde.');
        });
}
