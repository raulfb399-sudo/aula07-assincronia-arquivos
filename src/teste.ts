import { buscarComSeguranca } from "./buscar.js";

async function rodarTesteBuscar() {
  console.log("--- Testando Busca com Segurança ---");

  // Teste 1: Tentando ler um arquivo que REALMENTE existe (o log que criamos no ex 1)
  console.log("\n1. Testando arquivo existente (app.log):");
  const resultadoExiste = await buscarComSeguranca("app.log");
  console.log("Resultado lido:", resultadoExiste);

  // Teste 2: Tentando ler um arquivo fantasma que NÃO existe
  console.log("\n2. Testando arquivo inexistente (fantasma.txt):");
  const resultadoNaoExiste = await buscarComSeguranca("fantasma.txt");
  console.log("Resultado (deve ser null):", resultadoNaoExiste);
}

rodarTesteBuscar();
