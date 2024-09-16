"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bot_item_attributes", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "bot_items",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      attribute_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      attribute_value: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable("bot_item_attributes")
  }
}