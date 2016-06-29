class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.string :description
      t.integer :author_id, null: false
      t.integer :project_id, null: false
      t.boolean :completed, default: false
      t.timestamps null: false
    end

    add_index :tasks, :author_id
    add_index :tasks, :project_id
  end
end
