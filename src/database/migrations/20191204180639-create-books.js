'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('books',{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    
    genrer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'genres',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },

    author_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },

    publisher_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'publishers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    release_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('books');
  }
};
