# XML to Tree
###### Convert an XML string to an n-ary tree.

### Description
Given a valid XML document, read it in a tree structure.

### Example
We don't need to handle XML attributes in this problem. Lets consider the below XML document.

```XML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>DOM Tree as a File System</title>
  </head>
  <body>
    <h1>An Example Site</h1>
    <h3>To Demonstrate what some nested nodes might look like</h3>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    <p>
      Some Text
      <!-- A Comment -->
      More Text
    </p>
  </body>
</html>
```

### Output

{
  element: 'html',
  text: '',
  children: [
    {
      element: 'head',
      text: '',
      children: [
      {
        element: 'meta',
        text: '',
        children: []
      },
      {
        element: 'title',
        text: '',
        children: []
      }
      ]
    },
    {
      element: 'body',
      text: 'DOM Tree as a File System',
      children: [
      {
        element: 'h1',
        text: 'An Example Site',
        children: []
      },
      {
        element: 'h3',
        text: 'To Demonstrate what some nested nodes might look like',
        children: []
      },
      {
        element: 'ul',
        text: '',
        children: [
        {
          element: 'li',
          text: 'One',
          children: []
        },
        {
          element: 'li',
          text: 'Two',
          children: []
        },
        {
          element: 'li',
          text: 'Three',
          children: []
        }
        ]
      },
      {
        element: 'p',
        text: 'Some Text More Text',
        children: []
      }
      ]
    }
  ]
}
