---
title: Testing Nuxt.js Markdown Blogging
description: Creating a nuxt.js blog!
img: first-blog-post.jpg
alt: my first blog post
author: Danny Festor
---

# Testing Markdown Blogging

Welcome to my first blog post using content module.
Should even have Syntax Highlighting

HTML test:

<div>What does it do to the div tag?</div>

HTML Syntax Highlighting

```html
<div>What does it do to the div tag?</div>
```

JavaScript Syntax Highlighting

```javascript
const print_to_console = function(text) {
  console.log("Yout typed in", text);
};
```

PHP Syntax Highlighting

```php
class PostController extends Controller
{
      public function create()
    {
        $tags = Tag::orderBy('name', 'asc')->get();
        return view('posts.create', ["tags" => $tags]);
    }
}
```
