import PackageModel from '../database/models/Package.model';
import { Package } from '../types/Package';
import { ServiceResponse } from '../types/ServiceResponse';

const update = async (updated: Package): Promise<ServiceResponse<Package>> => {
  const pkgToUpdate = await PackageModel.findByPk(updated.id);
  if (!pkgToUpdate) {
    return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };
  }

  await PackageModel.update(updated, { where: { id: updated.id } });

  const pkgUpdated = await pkgToUpdate.reload();
  return { status: 'SUCCESSFUL', data: pkgUpdated.dataValues };
};

const remove = async (id: number): Promise<ServiceResponse<{ message: string }>> => {
  const findByPk = await PackageModel.findByPk(id);

  if (!findByPk) {
    return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };
  }
  await PackageModel.destroy({ where: { id } });
  return { status: 'SUCCESSFUL', data: { message: 'Pacote deletado com sucesso!' } };
};

export default {
  update,
  remove,
};