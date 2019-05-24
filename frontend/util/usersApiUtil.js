export const fetchAllUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
)

export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
)

export const postUser = user => (
    $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: { user }
    })
)

export const updateUser = user => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: { user }
    })
)

export const destroyUser = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/users/${id}`
    })
)