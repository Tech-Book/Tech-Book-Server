module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rents', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      copy_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'copies',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      devolution_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      limit_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      withdrawn_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('rents');
  }
};
