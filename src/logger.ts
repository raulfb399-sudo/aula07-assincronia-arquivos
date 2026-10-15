import fs from "fs/promises";

export async function log(mensagem: string): Promise<void> {
  const timestamp = new Date().toISOString();
  const linha = `[${timestamp}] ${mensagem}\n`;
  await fs.appendFile("app.log", linha, "utf-8");
}

export async function lerLogs(): Promise<string[]> {
  try {
    const conteudo = await fs.readFile("app.log", "utf-8");
    return conteudo.split("\n").filter(linha => linha.trim() !== "");
  } catch {
    return [];
  }
}
