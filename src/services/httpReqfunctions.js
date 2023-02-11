import http from "./httpService";

export const getAllComments = (id) => {
    if (id) return http.get(`/comments/${id}`);
    return http.get("/comments");
}

export const deleteComment = (id) => {
    return http.delete(`comments/${id}`);
}

export const postNewComment = (data) => {
    return http.post("comments", data)
}