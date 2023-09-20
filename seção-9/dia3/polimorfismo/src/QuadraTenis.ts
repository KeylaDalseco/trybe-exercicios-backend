import normas from './atividade-do-dia/normas/normasDeUso';
import IAgenda from './atividade-do-dia/interfaces/IAgenda';
import Quadra from './atividade-do-dia/Quadra';
import { ITenis } from './atividade-do-dia/interfaces/ITenis';

class QuadraTenis extends Quadra {
  // busca os dados da quadra referenciada
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    // gerando protocolo de agendamento
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReserva,
      regras: this.tenisData as unknown as ITenis,
    };
  }
}

export default QuadraTenis;