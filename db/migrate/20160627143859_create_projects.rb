class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :team_id, null: false
      t.string :title, null: false
      t.string :description
      t.timestamps null: false
    end

    add_index :projects, :team_id
  end
end
