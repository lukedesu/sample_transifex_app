const request = require('supertest')
const app = require('../index')

// describe('Home', () => {
//   it('should see Hello', async () => {
//     const res = await request(app).get('/')
//     expect(res.statusCode).toEqual(200)
//     expect(res.text).toContain('Hello')
//   })

//   it('should see 你好', async () => {
//     const res = await request(app).get('/?lang=zh-CN')
//     expect(res.statusCode).toEqual(200)
//     expect(res.text).toContain('你好')
//   })
// })

describe('Test Endpoints', () => {
  it('should get test field', async () => {
    const res = await request(app).get('/test')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('test')
  })
})