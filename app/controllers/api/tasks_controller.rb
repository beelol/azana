class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def create
    @task = Task.create!(task_params)

    render :show
  end

  def show
    @task = Task.find(params[:id]);
  end

  def destroy
    @task = Task.find(params[:id]);

    @task.destroy

    render json: {}
  end

  def task_params
    params.require(:task).permit(:title, :description, :project_id, :author_id)
  end
end
