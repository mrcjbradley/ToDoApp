import * as userAPIUtil from '../util/usersApiUtil';

export const [
    RECEIVE_ALL_USERS,
    RECEIVE_USER,
    REMOVE_USER,
    RECEIVE_USER_ERRORS
] = [
    "RECEIVE_ALL_USERS",
    "RECEIVE_USER",
    "REMOVE_USER",
    "RECEIVE_USER_ERRORS"
]

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUser = users => ({
    type: RECEIVE_USER,
    users
})

const removeUser = ({ userId }) => ({
    type: REMOVE_USER,
    userId
})

export const fetchAllUsers = () => dispatch => (
    userAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)),
    errors => dispatch(receiveNoteErrors(errors.responseJSON)))
)

export const fetchUser = id => dispatch => (
    userAPIUtil.fetchUser(id)
    .then(users => dispatch(receiveUser(users)),
    errors => dispatch(receiveNoteErrors(errors.responseJSON)))
)

export const postUser = user => dispatch => (
    userAPIUtil.postUser(user)
    .then(users => dispatch(receiveUser(users)),
    errors => dispatch(receiveNoteErrors(errors.responseJSON)))
)

export const updateUser = user => dispatch => (
    userAPIUtil.updateUser(user)
    .then(users => dispatch(receiveUser(users)),
    errors => dispatch(receiveNoteErrors(errors.responseJSON)))
)

export const deleteUser = userId => dispatch => (
    userAPIUtil.destroyUser(userId)
    .then(userId => dispatch(removeUser( userId )),
    errors => dispatch(receiveNoteErrors(errors.responseJSON)))
)