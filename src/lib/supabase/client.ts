import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = 'https://gsapueentgsgupatyhpd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzYXB1ZWVudGdzZ3VwYXR5aHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NTM1MTgsImV4cCI6MjA1MDEyOTUxOH0.caU6XobEM7Gn4KuWjE89lbf6alzHzDPibk7nf7SJ_mA';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);