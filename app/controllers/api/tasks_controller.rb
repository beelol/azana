class Api::TasksController < ApplicationController
  def index
    # @tasks = Task.all
    projects = Project.where(team: current_user_teams)

    @tasks = Task.where(project: projects)
  end

  def create
    @task = Task.create!(task_params)

    render :show
  end

  def show
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])

    @task.update!(task_params)

    render :show
  end

  def destroy
    @task = Task.find(params[:id])

    @task.destroy

    render :index
  end

  def task_params
    params.require(:task).permit(:title, :description, :project_id, :author_id)
  end
end
