import React from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function ArticleCategory() {
  return (
    <>
        <ul className="article-list">
                                <li>
                                    <div className="article-category py-2">
                                        <input type="checkbox" />
                                        <span className="mx-3">蛋糕</span>
                                        <FaChevronDown />
                                        <option>
                                          <input type="checkbox" />123
                                        </option>
                                        <option>123</option>
                                        <option>123</option>
                                    </div>
                                </li>
                                <li>
                                    <div className="article-category py-2">
                                        <input type="checkbox" />
                                        <span className="mx-3">蛋糕</span>
                                        <FaChevronDown />
                                    </div>
                                </li>
                                <li>
                                    <div className="article-category py-2">
                                        <input type="checkbox" />
                                        <span className="mx-3">蛋糕</span>
                                        <FaChevronDown />
                                    </div>
                                </li>
                                <li>
                                    <div className="article-category py-2">
                                        <input type="checkbox" />
                                        <span className="mx-3">蛋糕</span>
                                        <FaChevronDown />
                                    </div>
                                </li>
                            </ul>
    </>
  )
}
