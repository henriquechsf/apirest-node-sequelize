/**
 * TIPOS DE INTEGRIDADE DE RELACIONAMENTOS SEQUELIZE
 *
 * ON DELETE CASCADE se o registro pai for deletado o filho também será
 * ON UPDATE CASCADE se a primary key do registro pai for alterado, isso
 * será refletido no registro filho
 * RESTRICT significa que qualquer tentativa de apagar ou atualizar o
 * registro pai vai falhar lançando um erro
 * NO ACTION sem ações. Significa que o Mysql não vai realizar nenhuma ação
 * SET NULL se for excluido o registro pai a referencia no registro filho
 * ficará como null
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fotos');
  },
};
