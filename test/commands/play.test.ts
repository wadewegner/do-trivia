import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('play', () => {
  it('runs play cmd', async () => {
    const {stdout} = await runCommand('play')
    expect(stdout).to.contain('hello world')
  })

  it('runs play --name oclif', async () => {
    const {stdout} = await runCommand('play --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
