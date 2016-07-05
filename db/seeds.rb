# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(username: "Guest", password: "the_best")

Task.create([
  {
    title: "A truly great task",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "I need to get some eggs",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "And butter",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "And some milk too",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "also we should probably finish this project",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "actually go to work",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "actually get something done at work",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "A truly great task",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "I need to get some eggs",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "And butter",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "And some milk too",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "also we should probably finish this project",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "actually go to work",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "actually get something done at work",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "A truly great task",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "I need to get some eggs",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "And butter",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "And some milk too",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "also we should probably finish this project",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "actually go to work",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "actually get something done at work",
    description: "nice",
    project_id: 1,
    author_id: 1
  },
  {
    title: "call my parents",
    description: "nice",
    project_id: 1,
    author_id: 1
  }
  ])

Project.create(
  [
    {
      title: "The first project",
      description: "It's seriously the first project",
      team_id: 1,
    },
    {
      title: "The second project",
      description: "It's seriously the second project",
      team_id: 2,
    }
  ]
)
