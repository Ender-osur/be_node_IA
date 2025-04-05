import { Request } from "express";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import Peticion from "../entity/Peticion";

let arregloIA: Record<string, ChatCompletionMessageParam[]> = {};

class ControladorParamsIA {
  public static obtenerParamsIA(req: Request): ChatCompletionMessageParam[] {
    const { codUsuarioPeticion, idiomaPeticion, textoPeticion } = req.body as Peticion;
    


    return arregloIA[codUsuarioPeticion];
  }
}

export default ControladorParamsIA;
