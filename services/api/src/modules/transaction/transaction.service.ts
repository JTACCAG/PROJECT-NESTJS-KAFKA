import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  systemAntiFraud(transaction: Transaction) {
    const statusTransaction = true;
    return statusTransaction;
  }

  create(createTransactionDto: CreateTransactionDto) {
    //creamos un transaccion en estod pendiente

    //enviamos el evento de transaccionc creada al sistema antifraude

    //Deacuerdo a la respuesta del sistema antifraude, ponemos que fue aprovada o rechazada

    //Enviamos la respuesta al cliente
    return 'This action adds a new transaction';
  }

  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
