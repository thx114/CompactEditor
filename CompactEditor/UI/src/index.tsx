import { ModRegistrar } from "cs2/modding";
import { load } from "CompactEditor";

const register: ModRegistrar = (moduleRegistry) => {
    moduleRegistry.append('Editor', load);
}

export default register;