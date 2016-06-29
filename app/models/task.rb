# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#-  author_id   :integer          not null
#-  project_id  :integer          not null
#  completed   :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ActiveRecord::Base
  validates :title, presence: true
  after_initialize :initialize_description

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "User"

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: "Project"

  has_one :team,
  through: :project,
  source: :team

  def initialize_description
    @description = '';
  end
end
