/**
 * Dados reais da JC Odonto. Nada aqui foi inventado.
 */

export const WHATSAPP_NUMBER = "5511971313428";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma consulta na JC Odonto.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const PHONE_DISPLAY = "(11) 97131-3428";
export const PHONE_TEL = `+${WHATSAPP_NUMBER}`;

export const INSTAGRAM_URL = "https://www.instagram.com/jcodontobarueri/";
export const INSTAGRAM_HANDLE = "@jcodontobarueri";

export const ADDRESS_LINES = [
  "R. Benedita Guerra Zendron, Nº 19",
  "Vila São João, Barueri - SP",
  "06401-190, Brasil",
];
export const ADDRESS_QUERY = "R. Benedita Guerra Zendron, 19, Vila São João, Barueri - SP, 06401-190";
export const MAPS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_QUERY)}`;

export const NAV_LINKS = [
  { label: "Início", href: "#topo" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#servicos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export const SERVICES = [
  { nome: "Clareamento", descricao: "Procedimentos para deixar o sorriso mais claro e uniforme." },
  { nome: "Aparelhos", descricao: "Correção do alinhamento dos dentes com acompanhamento contínuo." },
  { nome: "Facetas", descricao: "Recobrimento estético para uniformizar cor e formato dos dentes." },
  { nome: "Próteses", descricao: "Reposição de dentes ausentes, restaurando função e estética." },
  { nome: "Canal", descricao: "Tratamento endodôntico para preservar o dente afetado." },
  { nome: "Cirurgias", descricao: "Procedimentos cirúrgicos odontológicos realizados na clínica." },
];

export const HOURS = [
  { dia: "Segunda-feira", horario: "08:30 – 18:00" },
  { dia: "Terça-feira", horario: "08:30 – 18:00" },
  { dia: "Quarta-feira", horario: "08:30 – 18:00" },
  { dia: "Quinta-feira", horario: "08:30 – 18:00" },
  { dia: "Sexta-feira", horario: "08:30 – 18:00" },
  { dia: "Sábado", horario: "09:00 – 14:00" },
  { dia: "Domingo", horario: "Fechado" },
];
