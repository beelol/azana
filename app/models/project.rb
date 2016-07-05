# == Schema Information
#
# Table name: projects
#
#  title       :string           not null
#  id          :integer          not null, primary key
#  team_id     :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  after_initialize :initialize_description

  belongs_to :team,
  primary_key: :id,
  foreign_key: :team_id,
  class_name: "Team"

  has_many :tasks,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: "Task"

  def initialize_description
    @description = '';
  end
end
