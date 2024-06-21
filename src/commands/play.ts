import {Command} from '@oclif/core'
import inquirer from 'inquirer'
import chalk from 'chalk'
import figlet from 'figlet'

const questions = [
  {
    question: 'What is DigitalOcean?',
    options: [
      'A cloud hosting provider',
      'A social media platform',
      'An e-commerce website',
      'A digital art marketplace',
    ],
    correct: 0,
  },
  {
    question: "What are DigitalOcean's virtual servers called?",
    options: ['Droplets', 'Instances', 'Nodes', 'Containers'],
    correct: 0,
  },
  {
    question: 'Which of these is NOT a DigitalOcean product?',
    options: ['Spaces', 'App Platform', 'Lambda Functions', 'Kubernetes'],
    correct: 2,
  },
  {
    question: "What is DigitalOcean's slogan?",
    options: ['Cloud for everyone', 'Simplifying the cloud', 'Your personal cloud', 'Leave the complexity to us'],
    correct: 1,
  },
  {
    question: 'In which year was DigitalOcean founded?',
    options: ['2007', '2011', '2013', '2015'],
    correct: 1,
  },
  {
    question: "What is the name of DigitalOcean's managed Kubernetes service?",
    options: ['DOKS', 'Kubernetes Engine', 'Container Service', 'K8s Cloud'],
    correct: 0,
  },
  {
    question: 'Which programming language was DigitalOcean initially built with?',
    options: ['Ruby', 'Python', 'Java', 'Go'],
    correct: 0,
  },
  {
    question: "What is the name of DigitalOcean's object storage solution?",
    options: ['Spaces', 'Buckets', 'ObjectStore', 'CloudFiles'],
    correct: 0,
  },
  {
    question: 'Which company, known for AI infrastructure, did DigitalOcean acquire in 2023?',
    options: ['Paperspace', 'Nvidia', 'OpenAI', 'DeepMind'],
    correct: 0,
  },
  {
    question: "What is the name of DigitalOcean's community platform for developers?",
    options: ['DigitalOcean Community', 'Ocean Forum', 'DO Developers', 'Cloud Coders'],
    correct: 0,
  },
  {
    question: 'Which of these services does DigitalOcean offer for running applications?',
    options: ['App Platform', 'Elastic Beanstalk', 'Heroku', 'Google App Engine'],
    correct: 0,
  },
]

export default class Play extends Command {
  static description = 'Play the DigitalOcean Trivia Game'

  async run(): Promise<void> {
    let totalScore = 0
    const startTime = Date.now()

    console.log(chalk.blue(figlet.textSync('DigitalOcean Trivia', {horizontalLayout: 'full'})))
    console.log(
      chalk.cyan('Welcome to the DigitalOcean Trivia Game! Test your knowledge and learn about DigitalOcean.\n'),
    )

    // Randomize questions
    const shuffledQuestions = this.shuffleArray([...questions])

    for (const q of shuffledQuestions) {
      const questionStartTime = Date.now()

      // Randomize answer options
      const shuffledOptions = this.shuffleArray([...q.options])
      const correctIndex = shuffledOptions.indexOf(q.options[q.correct])

      const {answer} = await inquirer.prompt([
        {
          type: 'list',
          name: 'answer',
          message: q.question,
          choices: shuffledOptions,
        },
      ])

      const answerTime = (Date.now() - questionStartTime) / 1000
      const isCorrect = shuffledOptions.indexOf(answer) === correctIndex

      if (isCorrect) {
        const points = Math.max(10 - Math.floor(answerTime), 1)
        totalScore += points
        console.log(chalk.green(`Correct! You earned ${points} points.`))
      } else {
        totalScore -= 5
        console.log(chalk.red(`Wrong! The correct answer was: ${shuffledOptions[correctIndex]}. You lost 5 points.`))
      }

      console.log(chalk.yellow(`Current score: ${totalScore}\n`))
    }

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(2)
    console.log(chalk.magenta(`Game Over! Your final score is ${totalScore}. Total time: ${totalTime} seconds.`))

    // Generate shareable ASCII art
    const shareableArt = this.generateShareableArt(totalScore, totalTime)
    console.log("\nHere's your shareable game result:")
    console.log(shareableArt)
    console.log(chalk.cyan('\nCopy the above art and paste it on social media with #DigitalOceanTrivia'))
  }

  generateShareableArt(score: number, time: string): string {
    const artText = `DO Trivia\nScore: ${score}\nTime: ${time}s`
    const art = figlet.textSync(artText, {
      font: 'Small',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    })
    return `\`\`\`\n${art}\n#DigitalOceanTrivia\n\`\`\``
  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
}
