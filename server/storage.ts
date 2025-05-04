import { users, type User, type InsertUser, blogPosts, type BlogPost, type InsertBlogPost } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // BlogPost methods
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  incrementBlogPostViews(id: number): Promise<BlogPost | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private userCurrentId: number;
  private blogPostCurrentId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.userCurrentId = 1;
    this.blogPostCurrentId = 1;
    
    // Initialize with sample blog posts
    this.initSampleBlogPosts();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // BlogPost methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
  
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostCurrentId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      publishedAt: new Date(),
      viewCount: 0,
      // Make sure imageUrl is never undefined
      imageUrl: insertPost.imageUrl || ""
    };
    this.blogPosts.set(id, post);
    return post;
  }
  
  async incrementBlogPostViews(id: number): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;
    
    const updatedPost = {
      ...post,
      viewCount: post.viewCount + 1
    };
    
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }
  
  // Sample data initialization
  private initSampleBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "An Ode to Toast, simplest of breakfast",
        slug: "ode-to-toast",
        summary: "Toast, a seemingly modest breakfast staple, has evolved far beyond its humble beginnings. From artisanal sourdough to brioche, the canvas for morning creativity is endless. This article explores the rich history and endless possibilities of this breakfast essential.",
        content: `<p class="mb-4">In our relentlessly paced world, where mornings often blur into a frantic rush, the simple act of preparing and enjoying breakfast can feel like a forgotten luxury. Yet, amidst the fancy smoothies, elaborate overnight oats, and trendy breakfast bowls, there stands a steadfast sentinel of simplicity and profound satisfaction: toast.</p>
<h2 class="text-2xl font-bold my-4">The Alchemical Transformation</h2>
<p class="mb-4">At its core, toast is an alchemical transformation. Take a humble piece of bread – be it crusty sourdough, soft white, hearty whole wheat, or even a sweet brioche – and subject it to the gentle caress of heat. What emerges is nothing short of magic.</p>
<h2 class="text-2xl font-bold my-4">A Culinary Chameleon</h2>
<p class="mb-4">But to view toast merely as heated bread is to overlook its true potential. It is, in essence, a blank canvas, eagerly awaiting the artist's touch. It is the ultimate culinary chameleon, effortlessly adapting to our ever-changing moods and desires.</p>`,
        imageUrl: "https://cdn.pixabay.com/photo/2015/12/05/11/04/bread-1077984_1280.jpg"
      },
      {
        title: "Benefits of dessert",
        slug: "benefits-of-dessert",
        summary: "Indulging in dessert isn't just about satisfying your sweet tooth—it can actually have some surprising benefits for both your mental and physical well-being. From boosting serotonin levels to providing essential nutrients found in ingredients like dark chocolate and fruits, desserts can be a delightful part of a balanced diet when enjoyed mindfully.",
        content: `<p class="mb-4">For too long, dessert has languished in the shadow of dietary dogma, often portrayed as the villain in our pursuit of health and wellness. While mindful consumption is undoubtedly crucial, this narrow perspective overlooks the surprisingly rich tapestry of psychological, social, and even subtle physiological advantages.</p>
<h2 class="text-2xl font-bold my-4">A Symphony of Sensory Pleasure</h2>
<p class="mb-4">At its most fundamental, dessert offers a powerful avenue for emotional gratification. In the intricate dance of our daily lives, punctuated by stressors and responsibilities, a well-crafted dessert can serve as a small but significant moment of pure sensory pleasure.</p>
<h2 class="text-2xl font-bold my-4">Sweetening Social Bonds</h2>
<p class="mb-4">Beyond the individual experience, dessert plays an undeniable role in our social fabric. Think of the rituals and traditions that revolve around sweet treats. Birthday celebrations are almost synonymous with cake, its layers symbolizing the years passed and the joy of the present moment.</p>`,
        imageUrl: "https://www.businessoffood.in/wp-content/uploads/2025/03/close-up-woman-having-wholesome-sweet-meal-scaled-e1742538445525-696x398.jpg"
      },
      {
        title: "Dessert, embracing pleasure in life",
        slug: "embracing-pleasure-dessert",
        summary: "In our fast-paced world, taking a moment to savor a delicious dessert can be a form of mindfulness and self-care. This article explores how the ritual of enjoying dessert connects us to cultural traditions, creates moments of joy, and helps us practice the art of savoring life's pleasures.",
        content: `<p class="mb-4">In a world that often champions productivity, discipline, and the pursuit of some distant, often elusive, ideal of perfection, it's easy to overlook the simple, immediate joys that life offers. Among these often-underappreciated pleasures lies dessert – a sweet indulgence that transcends mere sustenance.</p>
<h2 class="text-2xl font-bold my-4">A Multi-Sensory Immersion in Pleasure</h2>
<p class="mb-4">The experience of enjoying dessert is a multi-sensory immersion in pleasure. The anticipation as it arrives at the table, the visual appeal of its presentation, the enticing aroma that wafts towards us, the satisfying texture as it meets our palate, and finally, the explosion of flavor.</p>
<h2 class="text-2xl font-bold my-4">Cultural Connections Through Sweetness</h2>
<p class="mb-4">Desserts also serve as cultural touchstones, connecting us to our heritage and to the wider tapestry of human experience. Each culture has its own sweet traditions, from the delicate mochi of Japan to the rich baklava of the Middle East, the comforting apple pie of America to the sophisticated patisserie of France.</p>`,
        imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: "Super flaky pastry",
        slug: "super-flaky-pastry",
        summary: "What's the secret to creating pastry with those perfect, shatteringly crisp layers? This deep dive into the science and technique of laminated dough reveals the careful balance of temperature, timing, and technique required to achieve pastry perfection. Learn professional tips for creating buttery, flaky layers every time.",
        content: `<p class="mb-4">The pursuit of the perfect flaky pastry is both an art and a science, a delicate dance of technique, patience, and understanding. When executed with precision, the result is nothing short of magical: layers upon layers of impossibly thin, crisp sheets of dough separated by pockets of air, creating a texture that shatters delightfully upon first bite before melting away on the tongue.</p>
<h2 class="text-2xl font-bold my-4">The Science of Flakiness</h2>
<p class="mb-4">At the heart of flaky pastry lies a deceptively simple scientific principle: the separation of dough layers by fat. But it's the execution of this principle that separates the merely good from the truly exceptional pastry. In laminated doughs like croissants and puff pastry, solid fat (traditionally butter) is encased in dough and then repeatedly folded and rolled to create alternating layers.</p>
<h2 class="text-2xl font-bold my-4">Temperature: The Critical Variable</h2>
<p class="mb-4">Perhaps the most crucial factor in achieving that perfect flake is temperature control. The butter must be pliable enough to roll without breaking or tearing the dough, yet cold enough to remain distinct from the dough itself. Work in a too-warm environment, and the butter melts, absorbing into the dough and eliminating those distinct layers.</p>`,
        imageUrl: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1064&auto=format&fit=crop"
      }
    ];
    
    samplePosts.forEach((post, index) => {
      const id = this.blogPostCurrentId++;
      const now = new Date();
      const publishedDate = new Date(now);
      publishedDate.setDate(now.getDate() - (index * 15)); // Stagger publication dates
      
      this.blogPosts.set(id, {
        ...post,
        id,
        publishedAt: publishedDate,
        viewCount: Math.floor(Math.random() * 2000) + 500, // Random view count between 500-2500
        imageUrl: post.imageUrl || "" // Ensure imageUrl is never undefined
      });
    });
  }
}

export const storage = new MemStorage();
