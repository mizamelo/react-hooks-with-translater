import ptBR from "./pt-BR";
import enUS from "./en-US";

const listConfigs = [{ "pt-BR": ptBR, "en-US": enUS }];
const languageNavigator = navigator.language || "pt-BR";

const language = listConfigs[0][languageNavigator];

export default language;
