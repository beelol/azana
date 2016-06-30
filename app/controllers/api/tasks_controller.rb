class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def create
    @task = Task.create!()
  end
end
