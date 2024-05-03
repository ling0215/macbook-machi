import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Class',
    {
      class_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      class_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      class_description: {
        type: DataTypes.STRING(600),
        allowNull: false,
      },
      class_description_full: {
        type: DataTypes.STRING(600),
        allowNull: true,
      },
      class_category: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      teacher_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      class_location: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      class_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      class_enroll_start: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      class_enroll_end: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      class_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      class_end_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      class_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'class', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
