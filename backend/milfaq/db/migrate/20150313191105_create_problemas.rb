class CreateProblemas < ActiveRecord::Migration
  def change
    create_table :problemas do |t|
      t.string :descricao
      t.string :resposta
      t.integer :status
      t.integer :relator

      t.timestamps null: false
    end
  end
end
