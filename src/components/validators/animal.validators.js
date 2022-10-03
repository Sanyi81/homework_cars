import Joi from "joi";

const animalValidators = Joi.object ( {
  name: Joi.string().regex(/^a-zA-Zа-яА-ЯєЄїЇіІґҐёЁ$/).required()
      .messages({'string.pattern.base':'Тільки літери від 1 до 20 символів'})
})

export {animalValidators};