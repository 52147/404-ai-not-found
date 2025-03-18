"use client";

import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

export default function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<{ id: string; text: string }[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const q = query(collection(db, "comments", slug, "postComments"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
      }));
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [slug]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    
    await addDoc(collection(db, "comments", slug, "postComments"), {
      text: newComment,
      timestamp: new Date(),
    });

    setNewComment("");
  };

  return (
    <div className="mt-10 p-5 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-700 dark:text-white">
      <h2 className="text-2xl font-bold mb-3">💬 留言區</h2>

      <div className="mb-5 space-y-3 border-b border-gray-300 pb-5">
        {comments.length === 0 && <p className="text-gray-500">暫無留言</p>}
        {comments.length > 0 && <p className="text-gray-500">共有 {comments.length} 則留言</p>}

        {comments.map((comment) => (
          <p key={comment.id} className="border-b border-gray-300 py-2">{comment.text}</p>
        ))}
      </div>

      <textarea
        className="w-full border rounded-md p-2 dark:bg-gray-700 dark:text-white"
        rows={3}
        placeholder="留下你的評論..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>

      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleAddComment}
      >
        發送
      </button>
    </div>
  );
}