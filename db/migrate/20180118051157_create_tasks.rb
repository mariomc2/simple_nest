class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.references :todo_list, foreign_key: true
      t.string :name
      t.boolean :completed
      t.string :status
      t.integer :statusValue
      t.date :due

      t.timestamps
    end
  end
end
