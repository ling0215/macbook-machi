import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'ClassCommet',
    {
      class_commet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      class_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      class_commet_content: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      class_commet_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'class_commet', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
