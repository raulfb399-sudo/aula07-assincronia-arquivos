import fs from "fs/promises";

export interface Tarefa { 
  id: number; 
  titulo: string; 
  concluida: boolean; 
}

export async function buscarComSeguranca(caminho: string): Promise<string | null>
 {
  try {
    const dados = await fs.readFile(caminho, "utf-8");
    return dados;
  } catch {
    return null; 
  }
}
