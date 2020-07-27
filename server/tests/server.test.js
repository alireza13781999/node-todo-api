const expect = require('expect');
const request = require('supertest');

const {ObjectID} = require('mongodb');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID() ,
    text: "first test"
}, {
    _id: new ObjectID() ,
    text: "second test"
}];

beforeEach((done) => {
    Todo.remove({}).then(() => done());
});


describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'my test todo';
        request(app)
            .post('/todos')
            .send(text)
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            });
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
});



describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
          .get(`/todos/${todos[0]._id.toHexString}`)
          .expect(200)
          .expect((res) => {
              expect(res.body.todo.text).toBe(todos[0].text);
          });
          .end(done);
    });
});