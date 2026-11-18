const STORAGE_KEY = "ai-deep-dive-30-day";
const RING_CIRC = 2 * Math.PI * 52;

const NOTES = [
  "Depth compounds. Show up for the day in front of you.",
  "You do not need to feel ready. You need one clean block of focused practice.",
  "Intuition is contact time with the ideas. Keep going.",
  "Confusion is the feeling of a new model being built. Stay with the problem.",
  "A finished exercise teaches more than a perfect plan.",
  "The aim is a working mental model, not a crowded bookmark list.",
  "Today's fundamentals are the reason tomorrow's architecture makes sense."
];

const PHASES = [
  {
    id: 1,
    name: "Foundations",
    short: "Foundations",
    range: "Days 1–7",
    blurb: "Python, the math underneath models, and what learning from data actually means."
  },
  {
    id: 2,
    name: "Core Machine Learning",
    short: "Core ML",
    range: "Days 8–14",
    blurb: "Supervised and unsupervised methods, scikit-learn, and honest model evaluation."
  },
  {
    id: 3,
    name: "Deep Learning & Neural Networks",
    short: "Deep Learning",
    range: "Days 15–21",
    blurb: "Artificial networks, backpropagation, computer vision, and sequence models."
  },
  {
    id: 4,
    name: "Generative AI & NLP",
    short: "Generative AI",
    range: "Days 22–30",
    blurb: "Attention, transformers, language models, prompting, retrieval, and a capstone you can demo."
  }
];

const RESOURCE_META = {
  article: { label: "Article", icon: "fa-solid fa-book-open" },
  video: { label: "Video", icon: "fa-solid fa-circle-play" },
  github: { label: "GitHub", icon: "fa-brands fa-github" }
};

const CURRICULUM = [
  {
    day: 1,
    phase: 1,
    title: "Python Refresh",
    summary: "Rebuild fluency in the language every AI stack still speaks.",
    hours: 2.5,
    objectives: [
      "Write functions, comprehensions, and small classes without looking them up.",
      "Set up a virtual environment and install packages on purpose.",
      "Read a short script end to end and explain what each block is doing."
    ],
    resources: [
      { type: "article", title: "The Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
      { type: "video", title: "freeCodeCamp: Python for Everybody", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
      { type: "github", title: "TheAlgorithms / Python", url: "https://github.com/TheAlgorithms/Python" }
    ]
  },
  {
    day: 2,
    phase: 1,
    title: "NumPy and Pandas",
    summary: "Think in arrays and tables before you think in models.",
    hours: 2.5,
    objectives: [
      "Create, slice, and broadcast NumPy arrays.",
      "Load a CSV with pandas and compute group summaries.",
      "Explain why loops over rows are usually the slow path."
    ],
    resources: [
      { type: "article", title: "NumPy Absolute Beginners", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
      { type: "video", title: "Corey Schafer's Python channel", url: "https://www.youtube.com/@coreyms" },
      { type: "github", title: "pandas-dev / pandas", url: "https://github.com/pandas-dev/pandas" }
    ]
  },
  {
    day: 3,
    phase: 1,
    title: "Linear Algebra Essentials",
    summary: "Vectors, matrices, and the geometry behind every model.",
    hours: 3,
    objectives: [
      "Compute dot products, norms, and matrix-vector products by hand on tiny examples.",
      "Describe matrix multiplication as a transformation.",
      "Connect features in a dataset to columns of a matrix."
    ],
    resources: [
      { type: "article", title: "3Blue1Brown: Essence of Linear Algebra", url: "https://www.3blue1brown.com/topics/linear-algebra" },
      { type: "video", title: "Essence of Linear Algebra playlist", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
      { type: "github", title: "fastai / numerical-linear-algebra", url: "https://github.com/fastai/numerical-linear-algebra" }
    ]
  },
  {
    day: 4,
    phase: 1,
    title: "Calculus for Optimization",
    summary: "Derivatives, gradients, and why training walks downhill.",
    hours: 3,
    objectives: [
      "Differentiate simple functions and use the chain rule.",
      "Explain a partial derivative as a slope with other inputs held still.",
      "Sketch gradient descent on a one-dimensional loss curve."
    ],
    resources: [
      { type: "article", title: "3Blue1Brown: Essence of Calculus", url: "https://www.3blue1brown.com/topics/calculus" },
      { type: "video", title: "3Blue1Brown channel", url: "https://www.youtube.com/@3blue1brown" },
      { type: "github", title: "karpathy / micrograd", url: "https://github.com/karpathy/micrograd" }
    ]
  },
  {
    day: 5,
    phase: 1,
    title: "Probability and Statistics",
    summary: "Distributions, uncertainty, and the difference between noise and signal.",
    hours: 3,
    objectives: [
      "Describe mean, variance, and a normal distribution in plain language.",
      "Apply Bayes' rule to a small concrete example.",
      "Explain why a sample is not the population it came from."
    ],
    resources: [
      { type: "article", title: "Seeing Theory", url: "https://seeing-theory.brown.edu/" },
      { type: "video", title: "StatQuest channel", url: "https://www.youtube.com/@statquest" },
      { type: "github", title: "CamDavidsonPilon / Probabilistic-Programming-and-Bayesian-Methods-for-Hackers", url: "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers" }
    ]
  },
  {
    day: 6,
    phase: 1,
    title: "Exploratory Data Analysis",
    summary: "Look at the data hard enough that the model choice gets easier.",
    hours: 2.5,
    objectives: [
      "Plot distributions, missingness, and a few key relationships.",
      "Separate correlation from a claim about cause.",
      "Write three observations you would want a model to respect."
    ],
    resources: [
      { type: "article", title: "Seaborn tutorial", url: "https://seaborn.pydata.org/tutorial.html" },
      { type: "video", title: "StatQuest channel", url: "https://www.youtube.com/@statquest" },
      { type: "github", title: "mwaskom / seaborn", url: "https://github.com/mwaskom/seaborn" }
    ]
  },
  {
    day: 7,
    phase: 1,
    title: "The Machine Learning Problem",
    summary: "Features, labels, loss, and the split that keeps you honest.",
    hours: 2.5,
    objectives: [
      "Define a prediction task, its inputs, and its target.",
      "Explain train, validation, and test splits.",
      "Describe overfitting as memorizing the training set."
    ],
    resources: [
      { type: "article", title: "Deep Learning Book: Machine Learning Basics", url: "https://www.deeplearningbook.org/contents/ml.html" },
      { type: "video", title: "Google Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
      { type: "github", title: "ageron / handson-ml3", url: "https://github.com/ageron/handson-ml3" }
    ]
  },
  {
    day: 8,
    phase: 2,
    title: "Supervised vs Unsupervised",
    summary: "Know which family of problem you are actually solving.",
    hours: 2.5,
    objectives: [
      "Contrast classification, regression, clustering, and dimensionality reduction.",
      "Decide whether a task has labels worth using.",
      "Name a failure mode of picking the wrong objective."
    ],
    resources: [
      { type: "article", title: "scikit-learn user guide", url: "https://scikit-learn.org/stable/user_guide.html" },
      { type: "video", title: "StatQuest channel", url: "https://www.youtube.com/@statquest" },
      { type: "github", title: "scikit-learn / scikit-learn", url: "https://github.com/scikit-learn/scikit-learn" }
    ]
  },
  {
    day: 9,
    phase: 2,
    title: "The scikit-learn Workflow",
    summary: "Fit, predict, and keep preprocessing inside the pipeline.",
    hours: 2.5,
    objectives: [
      "Train an estimator with fit and score it with predict.",
      "Build a Pipeline so scaling stays inside cross-validation.",
      "Fix a random seed and write down the split you used."
    ],
    resources: [
      { type: "article", title: "scikit-learn getting started", url: "https://scikit-learn.org/stable/getting_started.html" },
      { type: "video", title: "freeCodeCamp channel", url: "https://www.youtube.com/@freecodecamp" },
      { type: "github", title: "scikit-learn / scikit-learn", url: "https://github.com/scikit-learn/scikit-learn" }
    ]
  },
  {
    day: 10,
    phase: 2,
    title: "Linear and Logistic Regression",
    summary: "The baseline that tells you whether a fancier model is earning its keep.",
    hours: 2.5,
    objectives: [
      "Fit a linear model and read its coefficients.",
      "Explain the sigmoid and log loss for classification.",
      "Compare an unregularized model with L2 regularization."
    ],
    resources: [
      { type: "article", title: "scikit-learn linear models", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
      { type: "video", title: "StatQuest channel", url: "https://www.youtube.com/@statquest" },
      { type: "github", title: "ageron / handson-ml3", url: "https://github.com/ageron/handson-ml3" }
    ]
  },
  {
    day: 11,
    phase: 2,
    title: "Decision Trees",
    summary: "Splits, impurity, and a model you can draw on a whiteboard.",
    hours: 2.5,
    objectives: [
      "Explain Gini impurity or entropy as a reason to split.",
      "Train a shallow tree and a deep tree on the same data.",
      "Show where the deep tree overfits."
    ],
    resources: [
      { type: "article", title: "scikit-learn decision trees", url: "https://scikit-learn.org/stable/modules/tree.html" },
      { type: "video", title: "StatQuest channel", url: "https://www.youtube.com/@statquest" },
      { type: "github", title: "scikit-learn / scikit-learn", url: "https://github.com/scikit-learn/scikit-learn" }
    ]
  },
  {
    day: 12,
    phase: 2,
    title: "Random Forests and Ensembles",
    summary: "Many imperfect trees, averaged into something sturdier.",
    hours: 2.5,
    objectives: [
      "Describe bagging and feature randomness.",
      "Compare a single tree with a random forest on the same split.",
      "Preview boosting as trees that focus on remaining error."
    ],
    resources: [
      { type: "article", title: "scikit-learn ensembles", url: "https://scikit-learn.org/stable/modules/ensemble.html" },
      { type: "video", title: "StatQuest channel", url: "https://www.youtube.com/@statquest" },
      { type: "github", title: "dmlc / xgboost", url: "https://github.com/dmlc/xgboost" }
    ]
  },
  {
    day: 13,
    phase: 2,
    title: "Support Vector Machines",
    summary: "Margins, kernels, and when a geometric classifier still wins.",
    hours: 2.5,
    objectives: [
      "Explain the maximum-margin idea in the linearly separable case.",
      "Describe a kernel as a way to bend the feature space.",
      "Train an SVM and a logistic model and compare them."
    ],
    resources: [
      { type: "article", title: "scikit-learn SVMs", url: "https://scikit-learn.org/stable/modules/svm.html" },
      { type: "video", title: "StatQuest channel", url: "https://www.youtube.com/@statquest" },
      { type: "github", title: "ageron / handson-ml3", url: "https://github.com/ageron/handson-ml3" }
    ]
  },
  {
    day: 14,
    phase: 2,
    title: "Model Evaluation",
    summary: "Accuracy is a starting point. Learn the metrics that match the decision.",
    hours: 3,
    objectives: [
      "Compute precision, recall, and F1 from a confusion matrix.",
      "Read a ROC curve and explain AUC.",
      "Use cross-validation and name one way data leakage sneaks in."
    ],
    resources: [
      { type: "article", title: "scikit-learn model evaluation", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
      { type: "video", title: "StatQuest channel", url: "https://www.youtube.com/@statquest" },
      { type: "github", title: "scikit-learn / scikit-learn", url: "https://github.com/scikit-learn/scikit-learn" }
    ]
  },
  {
    day: 15,
    phase: 3,
    title: "Anatomy of a Neural Network",
    summary: "From a single neuron to a stack of learned representations.",
    hours: 2.5,
    objectives: [
      "Draw a multilayer perceptron and name its inputs, weights, and activations.",
      "Compare ReLU and sigmoid as activation choices.",
      "Explain why depth builds features instead of only drawing one boundary."
    ],
    resources: [
      { type: "article", title: "3Blue1Brown: Neural Networks", url: "https://www.3blue1brown.com/topics/neural-networks" },
      { type: "video", title: "But what is a neural network?", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { type: "github", title: "karpathy / micrograd", url: "https://github.com/karpathy/micrograd" }
    ]
  },
  {
    day: 16,
    phase: 3,
    title: "PyTorch and TensorFlow Basics",
    summary: "Tensors, autodiff, and a module you can train.",
    hours: 3,
    objectives: [
      "Create tensors and move a computation through autograd.",
      "Define a small nn.Module with a forward pass.",
      "Note how TensorFlow names the same ideas: tensors, layers, and a training step."
    ],
    resources: [
      { type: "article", title: "PyTorch basics tutorial", url: "https://pytorch.org/tutorials/beginner/basics/intro.html" },
      { type: "video", title: "TensorFlow tutorials", url: "https://www.tensorflow.org/tutorials" },
      { type: "github", title: "pytorch / tutorials", url: "https://github.com/pytorch/tutorials" }
    ]
  },
  {
    day: 17,
    phase: 3,
    title: "Backpropagation and Training Loops",
    summary: "The backward pass, written out until it feels mechanical.",
    hours: 3,
    objectives: [
      "Trace a loss from the output back to one weight.",
      "Write a training loop: forward, loss, backward, step, zero_grad.",
      "Spot a vanishing or exploding gradient in a toy run."
    ],
    resources: [
      { type: "article", title: "PyTorch Autograd tutorial", url: "https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html" },
      { type: "video", title: "Karpathy: The spelled-out intro to neural networks", url: "https://www.youtube.com/watch?v=VMj-3S1tku0" },
      { type: "github", title: "karpathy / nn-zero-to-hero", url: "https://github.com/karpathy/nn-zero-to-hero" }
    ]
  },
  {
    day: 18,
    phase: 3,
    title: "Optimization and Regularization",
    summary: "Make training converge, then keep it from memorizing.",
    hours: 2.5,
    objectives: [
      "Contrast SGD, momentum, and Adam at a practical level.",
      "Apply dropout or weight decay and watch the train/validation gap.",
      "Use a learning-rate change when loss stalls."
    ],
    resources: [
      { type: "article", title: "PyTorch optimizers", url: "https://pytorch.org/docs/stable/optim.html" },
      { type: "video", title: "Practical Deep Learning for Coders", url: "https://course.fast.ai/" },
      { type: "github", title: "fastai / fastai", url: "https://github.com/fastai/fastai" }
    ]
  },
  {
    day: 19,
    phase: 3,
    title: "Convolutional Neural Networks",
    summary: "Local filters that learn edges, parts, and then objects.",
    hours: 3,
    objectives: [
      "Explain kernel size, stride, padding, and pooling.",
      "Describe how early layers and later layers differ.",
      "Build a small CNN for an image classification toy set."
    ],
    resources: [
      { type: "article", title: "CS231n: Convolutional Networks", url: "https://cs231n.github.io/convolutional-networks/" },
      { type: "video", title: "Stanford CS231n", url: "https://cs231n.stanford.edu/" },
      { type: "github", title: "pytorch / vision", url: "https://github.com/pytorch/vision" }
    ]
  },
  {
    day: 20,
    phase: 3,
    title: "Computer Vision in Practice",
    summary: "Data, augmentation, and a fine-tune that beats training from scratch.",
    hours: 3,
    objectives: [
      "Prepare an image folder and apply a simple augmentation.",
      "Fine-tune a pretrained vision backbone on a narrow task.",
      "Look at mistakes and say what the model confused."
    ],
    resources: [
      { type: "article", title: "Torchvision CIFAR-10 tutorial", url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html" },
      { type: "video", title: "Stanford CS231n", url: "https://cs231n.stanford.edu/" },
      { type: "github", title: "pytorch / examples", url: "https://github.com/pytorch/examples" }
    ]
  },
  {
    day: 21,
    phase: 3,
    title: "RNNs and LSTMs",
    summary: "Hidden state, long dependencies, and why gates were invented.",
    hours: 3,
    objectives: [
      "Unroll a recurrent cell across a short sequence.",
      "Explain the vanishing-gradient problem in plain recurrence.",
      "Name what the LSTM forget, input, and output gates are for."
    ],
    resources: [
      { type: "article", title: "Colah: Understanding LSTMs", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
      { type: "video", title: "Andrej Karpathy channel", url: "https://www.youtube.com/@AndrejKarpathy" },
      { type: "github", title: "karpathy / char-rnn", url: "https://github.com/karpathy/char-rnn" }
    ]
  },
  {
    day: 22,
    phase: 4,
    title: "Tokens and Embeddings",
    summary: "Turn language into numbers that carry meaning.",
    hours: 2.5,
    objectives: [
      "Tokenize a sentence and explain why subwords exist.",
      "Describe the distributional hypothesis behind embeddings.",
      "Contrast a static word vector with a contextual one."
    ],
    resources: [
      { type: "article", title: "The Illustrated Word2vec", url: "https://jalammar.github.io/illustrated-word2vec/" },
      { type: "video", title: "Stanford CS224n", url: "https://web.stanford.edu/class/cs224n/" },
      { type: "github", title: "huggingface / tokenizers", url: "https://github.com/huggingface/tokenizers" }
    ]
  },
  {
    day: 23,
    phase: 4,
    title: "The Attention Mechanism",
    summary: "Queries, keys, and values: look up what matters in the sequence.",
    hours: 3,
    objectives: [
      "Write the scaled dot-product attention formula in words.",
      "Explain why dividing by the square root of the key dimension matters.",
      "Describe attention as a weighted lookup over the sequence."
    ],
    resources: [
      { type: "article", title: "Visualizing A Neural Machine Translation Model", url: "https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/" },
      { type: "video", title: "Andrej Karpathy channel", url: "https://www.youtube.com/@AndrejKarpathy" },
      { type: "github", title: "huggingface / transformers", url: "https://github.com/huggingface/transformers" }
    ]
  },
  {
    day: 24,
    phase: 4,
    title: "Transformer Architecture",
    summary: "The block that replaced recurrence for language.",
    hours: 3,
    objectives: [
      "Stack attention, a feed-forward layer, and residual connections into one block.",
      "Explain multi-head attention as several lookups at once.",
      "Describe why positional information has to be added."
    ],
    resources: [
      { type: "article", title: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
      { type: "video", title: "Karpathy: Let's build GPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      { type: "github", title: "karpathy / minGPT", url: "https://github.com/karpathy/minGPT" }
    ]
  },
  {
    day: 25,
    phase: 4,
    title: "The Hugging Face Ecosystem",
    summary: "Models, tokenizers, and datasets without reinventing the loader.",
    hours: 2.5,
    objectives: [
      "Run a pipeline for an off-the-shelf NLP task.",
      "Load a tokenizer and a model checkpoint by name.",
      "Point at where you would fine-tune instead of only calling a pipeline."
    ],
    resources: [
      { type: "article", title: "Hugging Face NLP course", url: "https://huggingface.co/learn/nlp-course/chapter1/1" },
      { type: "video", title: "Hugging Face learn", url: "https://huggingface.co/learn" },
      { type: "github", title: "huggingface / transformers", url: "https://github.com/huggingface/transformers" }
    ]
  },
  {
    day: 26,
    phase: 4,
    title: "Large Language Models",
    summary: "Decoder-only GPT architecture, tokens in, tokens out.",
    hours: 3,
    objectives: [
      "Explain causal language modeling and the next-token objective.",
      "Describe temperature and top-p as sampling choices.",
      "Connect context length to what the model can condition on."
    ],
    resources: [
      { type: "article", title: "How GPT3 Works (visual)", url: "https://jalammar.github.io/how-gpt3-works-visualizations-animations/" },
      { type: "video", title: "Karpathy: Let's build GPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      { type: "github", title: "karpathy / nanoGPT", url: "https://github.com/karpathy/nanoGPT" }
    ]
  },
  {
    day: 27,
    phase: 4,
    title: "Prompt Engineering",
    summary: "Instructions, examples, and checks that the answer actually followed them.",
    hours: 2.5,
    objectives: [
      "Write a prompt with a role, a task, constraints, and an output format.",
      "Add one or two examples and compare the result with the zero-example version.",
      "Break a large task into smaller prompts and score them against a rubric."
    ],
    resources: [
      { type: "article", title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
      { type: "video", title: "DeepLearning.AI short courses", url: "https://www.deeplearning.ai/courses/" },
      { type: "github", title: "dair-ai / Prompt-Engineering-Guide", url: "https://github.com/dair-ai/Prompt-Engineering-Guide" }
    ]
  },
  {
    day: 28,
    phase: 4,
    title: "Retrieval-Augmented Generation",
    summary: "Answer from retrieved sources instead of from memory alone.",
    hours: 3,
    objectives: [
      "Chunk documents, embed them, and retrieve the nearest passages.",
      "Put retrieved text into the prompt and ask the model to cite it.",
      "Name two failure modes: the wrong chunk, and a stale index."
    ],
    resources: [
      { type: "article", title: "Retrieval-Augmented Generation paper", url: "https://arxiv.org/abs/2005.11401" },
      { type: "video", title: "Hugging Face learn", url: "https://huggingface.co/learn" },
      { type: "github", title: "langchain-ai / langchain", url: "https://github.com/langchain-ai/langchain" }
    ]
  },
  {
    day: 29,
    phase: 4,
    title: "Evaluation and Responsible Use",
    summary: "Check answers, respect people, and know the limits of a demo.",
    hours: 2.5,
    objectives: [
      "Build a tiny eval set and score answers against expected facts.",
      "Describe hallucination as a confident answer that is not supported.",
      "List privacy, bias, and unsafe-output risks you would design around before shipping."
    ],
    resources: [
      { type: "article", title: "OWASP Top 10 for LLM Applications", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
      { type: "video", title: "Stanford CS224n", url: "https://web.stanford.edu/class/cs224n/" },
      { type: "github", title: "huggingface / evaluate", url: "https://github.com/huggingface/evaluate" }
    ]
  },
  {
    day: 30,
    phase: 4,
    title: "Capstone: Ship an AI Assistant",
    summary: "A narrow assistant with a demo, a README, and an honest eval.",
    hours: 4,
    objectives: [
      "Pick one job small enough to finish: a tutor, a document Q&A bot, or a classical baseline plus a neural model.",
      "Wire the model, the data, and a simple interface or notebook.",
      "Write what it does well, where it fails, and how you measured that."
    ],
    resources: [
      { type: "article", title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" },
      { type: "video", title: "Karpathy: Let's build GPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      { type: "github", title: "karpathy / nanoGPT", url: "https://github.com/karpathy/nanoGPT" }
    ]
  }
];

let state = { completedThrough: 0 };
let activeFilter = "all";
let activeDay = null;
let returnFocus = null;
let toastTimer = 0;

function init() {
  if (CURRICULUM.length !== 30 || CURRICULUM.some((item, index) => item.day !== index + 1)) {
    console.error("Curriculum must be days 1 through 30 in order.");
  }
  state = loadState();
  bindEvents();
  render();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedThrough: 0 };
    const parsed = JSON.parse(raw);
    return { completedThrough: clampDay(parsed.completedThrough) };
  } catch (error) {
    return { completedThrough: 0 };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, completedThrough: state.completedThrough }));
  } catch (error) {
    showToast("This browser blocked saving progress.");
  }
}

function clampDay(value) {
  const number = Number(value);
  if (!Number.isInteger(number)) return 0;
  return Math.min(30, Math.max(0, number));
}

function statusFor(dayNumber) {
  if (dayNumber <= state.completedThrough) return "completed";
  if (dayNumber === state.completedThrough + 1) return "current";
  return "locked";
}

function phaseById(id) {
  return PHASES.find((phase) => phase.id === id);
}

function dayByNumber(dayNumber) {
  return CURRICULUM.find((item) => item.day === dayNumber);
}

function currentDayNumber() {
  return state.completedThrough >= 30 ? 30 : state.completedThrough + 1;
}

function formatHours(hours) {
  const rounded = Math.round(hours * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}h` : `${rounded.toFixed(1)}h`;
}

function hoursRemaining() {
  return CURRICULUM.filter((item) => item.day > state.completedThrough).reduce((sum, item) => sum + item.hours, 0);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function icon(className) {
  const node = document.createElement("i");
  node.className = className;
  node.setAttribute("aria-hidden", "true");
  return node;
}

function render() {
  renderProgress();
  renderCurriculum();
}

function renderProgress() {
  const done = state.completedThrough;
  const pct = Math.round((done / 30) * 100);
  const current = dayByNumber(currentDayNumber());
  const phase = phaseById(current.phase);
  const finished = done >= 30;

  document.getElementById("header-percent").textContent = `${pct}%`;
  document.getElementById("header-bar").style.width = `${pct}%`;
  const progressbar = document.getElementById("progressbar");
  progressbar.setAttribute("aria-valuenow", String(pct));
  progressbar.setAttribute("aria-valuetext", `${pct} percent, day ${done} of 30 completed`);

  document.getElementById("hero-status").textContent = `Day ${done} of 30 Completed`;
  document.getElementById("hero-phase").textContent = finished
    ? "Track complete"
    : `Phase ${phase.id} · ${phase.name}`;
  document.getElementById("hero-topic").textContent = finished
    ? "Every phase is complete. Review any day, or reset and run it again."
    : `Up next · Day ${current.day} · ${current.title}`;
  document.getElementById("quote-text").textContent = NOTES[done % NOTES.length];
  document.getElementById("continue-label").textContent = finished
    ? "Review capstone"
    : done === 0
      ? "Start Day 1"
      : `Continue Day ${current.day}`;

  document.getElementById("mastery-banner").hidden = !finished;
  document.getElementById("stat-completed").textContent = String(done);
  document.getElementById("stat-remaining").textContent = String(30 - done);
  document.getElementById("stat-hours").textContent = formatHours(hoursRemaining());
  document.getElementById("stat-phase").textContent = finished ? "Complete" : phase.short;

  const ring = document.getElementById("ring-progress");
  ring.style.strokeDasharray = String(RING_CIRC);
  ring.style.strokeDashoffset = String(RING_CIRC * (1 - pct / 100));
  ring.style.strokeLinecap = pct === 0 ? "butt" : "round";
  document.getElementById("ring-label").textContent = `${pct}%`;
}

function renderCurriculum() {
  const root = document.getElementById("curriculum");
  root.replaceChildren();

  const phases = PHASES.filter((phase) => activeFilter === "all" || phase.id === Number(activeFilter));
  for (const phase of phases) {
    const days = CURRICULUM.filter((item) => item.phase === phase.id);
    const done = days.filter((item) => statusFor(item.day) === "completed").length;

    const section = el("section", `phase-block phase-${phase.id}`);
    const heading = el("div", "phase-heading");
    const copy = el("div");
    const title = el("h2", null, phase.name);
    title.id = `phase-title-${phase.id}`;
    section.setAttribute("aria-labelledby", title.id);
    copy.append(
      el("p", "phase-kicker", `Phase ${phase.id} · ${phase.range}`),
      title,
      el("p", "phase-blurb", phase.blurb)
    );

    const meter = el("div", "phase-meter");
    meter.append(el("span", null, `${done}/${days.length}`));
    const track = el("div", "phase-meter-track");
    const fill = el("div", "phase-meter-fill");
    fill.style.width = `${Math.round((done / days.length) * 100)}%`;
    track.append(fill);
    meter.append(track);
    heading.append(copy, meter);

    const grid = el("div", "curriculum-grid");
    for (const day of days) grid.append(renderCard(day, phase));

    section.append(heading, grid);
    root.append(section);
  }
}

function renderCard(day, phase) {
  const status = statusFor(day.day);
  const statusClass = status === "completed" ? "complete" : status;
  const button = el("button", `day-card phase-${phase.id} day-${statusClass}`);
  button.type = "button";
  button.dataset.day = String(day.day);

  const statusText = status === "completed" ? "completed" : status === "current" ? "current day" : "locked";
  button.setAttribute("aria-label", `Day ${day.day}, ${day.title}, ${statusText}`);

  const top = el("span", "day-card-top");
  top.append(el("span", "day-index", String(day.day).padStart(2, "0")));

  const pill = el("span", `status-pill status-${status}`);
  const pillIcon = status === "completed" ? "fa-solid fa-check" : status === "current" ? "fa-solid fa-bolt" : "fa-solid fa-lock";
  const pillLabel = status === "completed" ? "Done" : status === "current" ? "Today" : "Locked";
  pill.append(icon(pillIcon), document.createTextNode(pillLabel));
  top.append(pill);

  const time = el("span");
  time.append(icon("fa-solid fa-clock"), document.createTextNode(formatHours(day.hours)));
  const meta = el("span", "day-meta");
  meta.append(time, el("span", null, phase.short));

  button.append(top, el("span", "day-title", day.title), el("span", "day-summary", day.summary), meta);
  return button;
}

function openModal(dayNumber) {
  const day = dayByNumber(dayNumber);
  if (!day) return;
  const phase = phaseById(day.phase);
  const status = statusFor(day.day);
  activeDay = day.day;
  returnFocus = document.activeElement;

  document.getElementById("modal-kicker").textContent = `Day ${String(day.day).padStart(2, "0")} · Phase ${phase.id}`;
  document.getElementById("modal-title").textContent = day.title;
  document.getElementById("modal-summary").textContent = day.summary;
  document.getElementById("modal-hours").textContent = `${formatHours(day.hours)} · ${phase.name}`;

  const statusEl = document.getElementById("modal-status");
  statusEl.className = `status-pill status-${status}`;
  statusEl.replaceChildren(
    icon(status === "completed" ? "fa-solid fa-check" : status === "current" ? "fa-solid fa-bolt" : "fa-solid fa-lock"),
    document.createTextNode(status === "completed" ? " Done" : status === "current" ? " Today" : " Locked")
  );

  const objectives = document.getElementById("modal-objectives");
  objectives.replaceChildren();
  for (const objective of day.objectives) {
    objectives.append(el("li", null, objective));
  }

  const resources = document.getElementById("modal-resources");
  resources.replaceChildren();
  for (const resource of day.resources) {
    const meta = RESOURCE_META[resource.type];
    const link = el("a", "resource-link");
    link.href = resource.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `${meta.label}: ${resource.title}. Opens in a new tab.`);
    const text = el("span");
    text.append(el("small", null, meta.label), el("strong", null, resource.title));
    link.append(icon(meta.icon), text);
    resources.append(link);
  }

  const hint = document.getElementById("modal-hint");
  const action = document.getElementById("modal-action");
  const actionIcon = action.querySelector("i");
  const actionLabel = document.getElementById("modal-action-label");
  const undo = document.getElementById("modal-undo");

  if (status === "current") {
    action.disabled = false;
    actionIcon.className = "fa-solid fa-check";
    actionLabel.textContent = "Mark as Completed";
    hint.textContent = day.day === 30
      ? "This is the capstone. Marking it complete finishes the 30-day track."
      : `Marking this day complete unlocks Day ${day.day + 1}.`;
  } else if (status === "completed") {
    action.disabled = true;
    actionIcon.className = "fa-solid fa-check";
    actionLabel.textContent = "Completed";
    hint.textContent = day.day === state.completedThrough
      ? "This is your latest completion. Undo it if you marked the day by mistake."
      : "This lesson is already saved in your progress.";
  } else {
    action.disabled = true;
    actionIcon.className = "fa-solid fa-lock";
    actionLabel.textContent = "Mark as Completed";
    hint.textContent = `Finish Day ${state.completedThrough + 1} to unlock this lesson. You can still read the plan.`;
  }

  undo.hidden = !(status === "completed" && day.day === state.completedThrough);

  const modal = document.getElementById("modal-root");
  modal.hidden = false;
  document.body.classList.add("no-scroll");
  document.getElementById("modal-close").focus();
}

function closeModal() {
  const modal = document.getElementById("modal-root");
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("no-scroll");
  if (returnFocus && typeof returnFocus.focus === "function" && document.contains(returnFocus)) {
    returnFocus.focus();
  }
  returnFocus = null;
}

function markComplete() {
  if (activeDay !== state.completedThrough + 1) return;
  const finishedDay = activeDay;
  state.completedThrough += 1;
  saveState();
  returnFocus = null;
  closeModal();
  render();
  const message = state.completedThrough === 30
    ? "Day 30 complete. You finished the deep dive."
    : `Day ${finishedDay} marked complete.`;
  showToast(message);
  announce(message);
  const next = document.querySelector(".day-current") || document.querySelector(".day-complete");
  if (next) next.focus({ preventScroll: true });
}

function undoComplete() {
  if (activeDay !== state.completedThrough) return;
  const undone = activeDay;
  state.completedThrough -= 1;
  saveState();
  returnFocus = null;
  closeModal();
  render();
  const message = `Day ${undone} marked incomplete.`;
  showToast(message);
  announce(message);
}

function resetProgress() {
  if (state.completedThrough === 0) {
    showToast("Progress is already at day 0.");
    return;
  }
  const confirmed = window.confirm("Reset all progress on this browser?");
  if (!confirmed) return;
  state.completedThrough = 0;
  saveState();
  closeModal();
  render();
  showToast("Progress reset.");
  announce("Progress reset. Day 0 of 30 completed.");
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-btn").forEach((button) => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
  });
  renderCurriculum();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  document.getElementById("toast-text").textContent = message;
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2800);
}

function announce(message) {
  const live = document.getElementById("live-region");
  live.textContent = "";
  window.setTimeout(() => {
    live.textContent = message;
  }, 30);
}

function bindEvents() {
  document.getElementById("curriculum").addEventListener("click", (event) => {
    const card = event.target.closest("[data-day]");
    if (!card) return;
    openModal(Number(card.dataset.day));
  });

  document.querySelector(".filter-row").addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    setFilter(button.dataset.filter);
  });

  document.getElementById("continue-btn").addEventListener("click", () => {
    openModal(currentDayNumber());
  });

  document.getElementById("modal-action").addEventListener("click", markComplete);
  document.getElementById("modal-undo").addEventListener("click", undoComplete);
  document.getElementById("reset-btn").addEventListener("click", resetProgress);

  document.getElementById("modal-root").addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("[data-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    const modal = document.getElementById("modal-root");
    if (modal.hidden) return;
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...modal.querySelectorAll("a[href], button")].filter((node) => !node.disabled && !node.hidden && node.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

init();
