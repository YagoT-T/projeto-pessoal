const nomeProduto = "Café em Grãos"
const estoqueAtual = 4
const estoqueMinimo = 10
const quantidadeCaixa = 12
const estoqueFinal = estoqueAtual + quantidadeCaixa

if (estoqueAtual >= estoqueMinimo) {
    console.log(`Produto: ${nomeProduto}`)
    console.log("Situação: Estoque normal. Nenhuma ação necessária.")
} else {
    console.log(`Alerta: Estoque crítico para ${nomeProduto}!`)
    console.log(`Situação: Compre 1 caixa (12 unidades), o estoque irá para ${estoqueFinal} unidades.`)
}